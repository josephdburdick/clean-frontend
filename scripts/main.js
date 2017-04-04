"use strict";var $$2=window.$||{},mobileMenu=function(){var e={state:{open:!1}};return e.init=function(){e.registerEvents()},e.registerEvents=function(){$$2('[data-toggle="mobile-menu"]').on("click",function(t){t.preventDefault(),e.state.open=!e.state.open,e.state.open?$$2("body").addClass("mobile-menu--open"):$$2("body").removeClass("mobile-menu--open")})},{init:e.init}}(),mobileMenu$1={init:mobileMenu.init},$$4=window.$||{},MEDIA=function(){var e={},t={default:{iframe:{attributes:'\n          class="embed-responsive-item"\n          webkitallowfullscreen\n          mozallowfullscreen\n          allowfullscreen\n          frameborder="0"',width:560,height:315}},is:{},get:{youtube:{},vimeo:{}}};return t.default.iframe.template=function(e){return'\n    <iframe\n      src="'+e+'"\n      width="'+t.default.iframe.width+'"\n      height="'+t.default.iframe.height+'"\n      '+t.default.iframe.attributes+"></iframe>"},t.get.vimeo.idByUrl=function(e){var t=!1;return $$4.ajax({url:"https://vimeo.com/api/oembed.json?url="+e,type:"GET",success:function(e){e.video_id&&(t=e.video_id)}}),t},t.get.youtube.idByUrl=function(e){var t=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,a=e.match(t);return!(!a||11!==a[2].length)&&a[2]},t.get.youtube.embedUrl=function(a){if(t.is.video(a)&&t.is.youtube(a)){var n=t.get.youtube.idByUrl(a),i="&autoplay="+(e.autoplay?1:0);return"//www.youtube.com/embed/"+n+"?"+i}},t.get.vimeo.embedUrl=function(a){if(t.is.video(a)&&t.is.vimeo(a)){var n=t.get.vimeo.idByUrl(a),i="&autoplay="+(e.autoplay?1:0);return"//player.vimeo.com/video/"+n+"?badge=0"+i}},t.get.youtube.embed=function(e){var a=t.get.youtube.embedUrl(e);return t.default.iframe.template(a)},t.get.vimeo.embed=function(e){var a=t.get.vimeo.embedUrl(e);return t.default.iframe.template(a)},t.is.youtube=function(e){return!!t.get.youtube.idByUrl(e)},t.is.vimeo=function(e){return!!t.get.vimeo.idByUrl(e)},t.is.video=function(){return!!t.is.youtube||!!t.is.vimeo},t.get.videoType=function(e){return t.is.youtube(e)?"youtube":t.is.vimeo(e)?"vimeo":"unknown"},t.get.iframe=function(a,n){if(e.autoplay=n.autoplay,t.is.video(a)){var i=t.get.videoType(a);return t.get[i].embed(a)}return console.warn("Media url type is unknown."),!1},{is:t.is,get:t.get}}(),MEDIA$1={is:MEDIA.is,get:MEDIA.get},$$3=window.$||{},mediaModal=function(){var e={};return e.init=function(){e.registerEvents()},e.registerEvents=function(){$$3('[data-toggle="modal"][data-media-url]').on("click",function(e){var t=$$3(e.currentTarget),a={url:t.data("media-url"),autoplay:!!t.data("media-autoplay"),controls:!!t.data("media-controls")},n={$el:$$3(t.data("target")),target:t.data("target")};$$3(n.target).length||($$3(mediaModal.modalTemplate()).appendTo($$3("body")),n.$el=$$3(n.target)),n.$el.one("show.bs.modal",function(){n.$el.find(".modal-body").html(mediaModal.wrapperTemplate(MEDIA$1.get.iframe(a.url,{autoplay:a.autoplay})))}).one("hide.bs.modal",function(){n.$el.find(".modal-body").html(mediaModal.wrapperTemplate(mediaModal.placeholderTemplate()))})})},e.placeholderTemplate=function(){return'<div class="embed-responsive-item placeholder-block"></div>'},e.modalTemplate=function(){return'\n  <div\n    class="modal fade"\n    id="modal--primary"\n    tabindex="-1"\n    role="dialog"\n    aria-labelledby="Modal Window"\n    aria-hidden="true">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <span></span>\n          <a class="close modal__btn-close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true"><img src="images/icon__btn-x.png"/></span>\n          </a>\n        </div>\n        <div class="modal-body">\n          '+e.placeholderTemplate()+"\n        </div>\n      </div>\n    </div>\n  </div>"},e.wrapperTemplate=function(e){return'\n    <div role="media" class="media-container embed-responsive embed-responsive-16by9">\n      '+(e?e:null)+"\n    </div>"},{init:e.init,placeholderTemplate:e.placeholderTemplate,modalTemplate:e.modalTemplate,wrapperTemplate:e.wrapperTemplate}}(),mediaModal$1={init:mediaModal.init,placeholderTemplate:mediaModal.placeholderTemplate,wrapperTemplate:mediaModal.wrapperTemplate,modalTemplate:mediaModal.modalTemplate},carousel=function(e){var t={},a={lazyLoad:"ondemand",adaptiveHeight:!0,autoplay:!0,autoplaySpeed:8e3,dots:!0,slidesToShow:1,centerMode:!0,centerPadding:"0px",variableWidth:!0},n=Object.assign({},a,e);return t.init=function(){$(".hero-carousel").slick(n)},{init:t.init}}(),carousel$1={init:carousel.init},inputSpinner=function(){var e=function(e){return e.replace(/[^0-9]/,"")},t=function(){$('.input-spinner [type="button"][data-role]').on("click",function(e){var t=$(e.currentTarget),a=t.closest(".input-spinner").find('input:not([type="button"])');"increment"===t.data("role")&&(!a.attr("max")||parseInt(a.val(),10)<parseInt(a.attr("max"),10)?a.val(parseInt(a.val(),10)+1).trigger("change"):t.next("disabled",!0)),"decrement"===t.data("role")&&(!a.attr("min")||parseInt(a.val(),10)>parseInt(a.attr("min"),10)?a.val(parseInt(a.val(),10)-1).trigger("change"):t.prev("disabled",!0))}),$('.input-spinner input[type="text"]').on("change keypress",function(t){t.currentTarget.value=e(t.currentTarget.value)})},a=function(){return t()};return{init:a}}(),inputSpinner$1={init:inputSpinner.init},inputDateSelector=function(){var e=function(){$(".datepicker").datepicker({templates:{leftArrow:'<i class="fa fa-caret-left"></i>',rightArrow:'<i class="fa fa-caret-right"></i>'},startDate:"today",maxViewMode:0})};$("#cleanse-together-datepicker-start").on("changeDate",function(){$("#startDate").val($("#cleanse-together-datepicker-start").datepicker("getFormattedDate"))});var t=function(){return e()};return{init:t}}(),inputDateSelector$1={init:inputDateSelector.init},handleInputBinding=function(e){e.name&&$('[data-bind="'+e.name+'"]').length&&$('[data-bind="'+e.name+'"]').text(e.value)},validateForm=function(e){var t=e.form,a=$(t);a.on("submit",function(){}).on("change keyup","input",function(e){var t={el:e.currentTarget,$el:$(e.currentTarget),name:e.currentTarget.name,value:e.currentTarget.value};handleInputBinding(t);var a=t.$el.closest("fieldset").find('[data-slide="next"]');return t.$el.closest("fieldset").is("#flavorCount")?!function(){var e=0,n=t.$el.closest("fieldset"),i=n.find('input[type="number"]'),r=parseInt($("#participantCount").val(),10);i.map(function(t,a){e+=parseInt(a.value,10)}),r<=e?(a.prop("disabled",!1),n.find(".form-control-feedback").addClass("invisible")):(a.prop("disabled",!0),n.find(".form-control-feedback").removeClass("invisible"))}():t.$el.is(":valid")&&!t.$el.closest("fieldset").is("#flavorCount")?a.prop("disabled",!1):a.prop("disabled",!0),!0})},purchaseStepsCarousel=function(e){var t=e.carouselEl,a=$(t).slick({adaptiveHeight:!0,cssEase:"linear",draggable:!1,fade:!0,infinite:!1,slidesToShow:1,speed:300,arrows:!1});$(t).on("click","[data-slide]",function(e){e.preventDefault;var t=$(e.currentTarget),n=t.data("slide"),i="slick"+n.charAt(0).toUpperCase()+n.slice(1);a.slick(i)})},purchaseSteps=function(){var e=function(){var e={formEl:"#form__cleanse-together",carouselEl:"#form__cleanse-together_carousel"};inputSpinner$1.init(),validateForm({form:e.formEl}),purchaseStepsCarousel({carouselEl:e.carouselEl}),inputDateSelector$1.init()},t=function(){return e()};return{init:t}}(),purchaseSteps$1={init:purchaseSteps.init},$$1=window.jQuery||{};$$1("document").ready(function(){mobileMenu$1.init(),mediaModal$1.init(),carousel$1.init(),purchaseSteps$1.init()});