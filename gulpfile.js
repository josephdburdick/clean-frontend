const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const wiredep = require('wiredep').stream;
const runSequence = require('run-sequence');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const nodeResolve = require('rollup-plugin-node-resolve');

const fs = require('fs');
const vm = require('vm');
const path = require('path');

function requireUncached( $module ) {
  delete require.cache[require.resolve( $module )];
  return require( $module );
}

const C = (() => {
  this.dir = {
    root: '.',
    src: 'app',
    dist: 'dist',
    tmp: '.tmp',
    tmpData: '.tmp/data'
  };
  this.getFileType = (file) => path.basename(file.path).split('.').pop();
  this.getFileName = (file) => {
    let filePath = path.basename(file.path).split('.');
    filePath.pop();
    filePath.push('js');
    return filePath.join('.');
  };
  this.getFilePath = (file) => `${__dirname}/.tmp/data/templates/${this.getFileName(file)}`;
  return this;
})();

gulp.task('data', () => {
  return gulp.src('app/data/**/*.js')
    .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
    .pipe($.babel())
    .pipe(gulp.dest('.tmp/data'))
    .pipe(reload({stream: true}));
});

gulp.task('bundle', () => {
  return rollup({
      entry: './app/scripts/index.js',
      sourceMap: false,
      plugins: [
        nodeResolve({
          jsnext: true
        })
      ]
    })
    .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
    .pipe(source('index.js', './app/scripts'))
    .pipe(buffer())
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.rename('main.js'))
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./test/scripts'))
    .pipe(gulp.dest('./.tmp/scripts'));
});
gulp.task('bundle:data', ['data'], () => {
  return rollup({
    entry: './.tmp/data/global.js',
    sourceMap: false,
    plugins: [
      nodeResolve({
        jsnext: true
      })
    ]
  })
  .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
  .pipe(source('global.js', './.tmp/data'))
  .pipe(buffer())
  .pipe($.sourcemaps.init({loadMaps: true}))
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('./test/data'));
});

gulp.task('templates', ['data'], () => {
  return gulp.src(['app/templates/*.njk', '!app/templates/layout/layout.njk'])
    .pipe($.data((file) => {
      const templateData = Object.assign(
        {},
        requireUncached('./.tmp/data/global.js').default,
        requireUncached(C.getFilePath(file)).default
      );
      return templateData;
    }))
    .pipe($.nunjucks.compile())
    .pipe($.rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('.tmp/'))
    .pipe(reload({stream: true}));
});

gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', ['bundle'], () => {
  return gulp.src('./.tmp/scripts/**/*.js')
    .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
  return lint('app/scripts/**/*.js', {
    fix: true,
    ecmaFeatures: {
      modules: true,
      spread : true,
      restParams : true
    },
    env : {
      browser : true,
      node : true,
      es6 : true
    },
    rules : {
      'no-unused-vars' : 2,
      'no-undef' : 2
    },
      parserOptions: {
      sourceType: 'module'
    }
  })
  .pipe(gulp.dest('app/scripts'));
});
gulp.task('lint:test', () => {
  return lint('test/spec/**/*.js', {
    fix: true,
    env: {
      mocha: true
    }
  })
    .pipe(gulp.dest('test/spec'));
});

gulp.task('html', ['templates', 'styles', 'bundle'], () => {
  return gulp.src('.tmp/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: false})))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*',
    '!data',
    '!app/*.html',
    '!app/templates/*.njk',
    '!app/**/*.njk'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist', 'test/data', 'test/scripts']));

gulp.task('serve', () => {
  runSequence(['clean', 'wiredep'], ['templates', 'styles', 'bundle', 'fonts'], () => {
    browserSync({
      notify: false,
      port: 3000,
      open: false,
      server: {
        baseDir: ['.tmp', 'app'],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });

    gulp.watch([
      'app/*.html',
      'app/images/**/*',
      'app/data/**/*',
      '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('app/data/**/*.js', ['templates']).on('change', reload);
    gulp.watch('app/templates/**/*.njk', ['templates']).on('change', reload);
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['bundle']);
    gulp.watch('app/fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
  });
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 3000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', ['templates', 'styles','bundle:data'], () => {
  browserSync({
    notify: false,
    port: 3000,
    ui: false,
    server: {
      baseDir: ['test'],
      routes: {
        '/images': 'app/images',
        '/styles': '.tmp/styles',
        '/scripts': '.tmp/scripts',
        '/data': 'test/data',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('app/scripts/**/*.js', ['bundle']);
  gulp.watch(['test/spec/**/*.js', 'test/index.html']).on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/templates/layout/_layout.njk')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app/templates/layout'));
});

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', () => {
  runSequence(['clean', 'wiredep'], 'build');
});

gulp.task('deploy', () => {
  return gulp.src('./dist/**/*')
    .pipe($.ghPages());
});
