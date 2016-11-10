# Clean front-end
Static front-end development workflow featuring Gulp, ES6, Sass, and Nunjucks templates. The intention is to precompile written templates of components, inject them with data, and generate corresponding pages.

## Prerequisites
1. Install Node.js
2. Install Bower `npm i bower -g`
3. Install Yarn `npm i yarn -g`

## Installation
1. run `yarn` in project root to install Node dependencies
2. run `bower install` in project root to install Bower dependencies
3. run `gulp wiredep` if adding any front-end assets from Bower

## Usage
1. run `npm start` or `gulp serve` to watch changes in `app` (changes to `app/data` needs a whole restart)
2. run `npm run build` to build static assets in `dist` directory
3. if ever adding bower dependencies, update the `_layout` partial by running `gulp wiredep`

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
