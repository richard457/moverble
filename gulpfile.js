const elixir = require('laravel-elixir');

require('laravel-elixir-vue');
require('laravel-elixir-ng-annotate');

require('elixir-jshint');
require('laravel-elixir-vueify');

var babel = require("gulp-babel");
var gulp = require('gulp');
var autoprefix = require('gulp-autoprefixer');
var jshint     = require('gulp-jshint');
// var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var changed = require('gulp-changed');

// var imagemin = require('gulp-imagemin');
var  gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');



/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// elixir(function(mix) {
//     mix.sass('dialogs.scss')
//     .browserify('app.js');
// });

var appScripts = [
  './resources/assets/js/inner/**/*.js'
];

elixir(mix => {

   mix.sass('app.scss')
//   mix.sass('dialogs.scss')

  //    mix.copy('./resources/assets/bower_resources/At.js/dist/css/jquery.atwho.css', './public/css/jquery.atwho.css')
  //    mix.copy('./resources/assets/bower_resources/bootstrap/dist/css/bootstrap.css','./public/css/b4.css')
  //    mix.copy('./resources/assets/bower_resources/jQuery-contextMenu/dist/jquery.contextMenu.css', './public/css/jquery.contextMenu.css')
  //    mix.copy('./resources/assets/bower_resources/jQuery-contextMenu/dist/font', './public/css/font')
  //    mix.sass('developer.web.scss')

  //      mix.styles([
  //         './resources/assets/lib/ionic/css/angular-material.min.css',
  //         './resources/assets/bower_resources/angular-material/angular-material.css',
  //         './resources/assets/bower_resources/notie/dist/notie.css',
  //         './resources/assets/bower_resources/Winstrap/dist/css/winstrap.css',
  //     ], 'public/css/dependecies.css')
    //  .webpack('app.js')
      // mix.browserify('app.js')
      // .browserSync({
      //     proxy: 'http://localhost:8000'
      // })
  //     .scripts([
  //         './resources/assets/e-design/materialize-tags.js',
  //         './resources/assets/e-design/Main.js',
  //         './resources/assets/e-design/bootstrap.js',
  //         './resources/assets/e-design/jquery.easy-pie-chart.js',
  //         './resources/assets/e-design/app.plugin.js',
  //     ],'public/js/e-design.js')
  .scripts([

      './resources/bower_resources/jquery/dist/jquery.js',
      './resources/bower_resources/angular/angular.min.js',
      './resources/lib/angular-upload.js',
      './resources/bower_resources/angular-animate/angular-animate.min.js',
      './resources/bower_resources/angular-route/angular-route.min.js',
      './resources/bower_resources/angular-aria/angular-aria.min.js',
      './resources/bower_resources/angular-messages/angular-messages.min.js',
      './resources/lib/ionic/js/svg-assets-cache.js',
      './resources/bower_resources/tether/dist/js/tether.js',
      './resources/bower_resources/angular-material/angular-material.min.js',
      './resources/bower_resources/angular-bootstrap/ui-bootstrap-tpls.min.js',
      './resources/bower_resources/angular-bootstrap/ui-bootstrap-tpls.js',
      './resources/bower_resources/ng-dialog/js/ngDialog.min.js',

      './resources/bower_resources/bootstrap/dist/js/bootstrap.min.js',

      './resources/bower_resources/bootstrap/dist/js/bootstrap.js',
      './resources/bower_resources/angular-ui-router/release/angular-ui-router.min.js',
      './resources/bower_resources/pdfjs-dist/build/pdf.js',
      './resources/bower_resources/angular-pdf-viewer/dist/angular-pdf-viewer.min.js',
      './resources/vendor/jquery-file-download.js',

      './resources/bower_resources/mousetrap/mousetrap.js',


      './resources/bower_resources/angular-loading-bar/src/loading-bar.js',
      './resources/bower_resources/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js',
      './resources/bower_resources/angular-ui-router.stateHelper/statehelper.min.js',
      './resources/bower_resources/notie/dist/notie.js',
      './resources/bower_resources/pouchdb/dist/pouchdb.min.js',
      './resources/bower_resources/angular-sanitize/angular-sanitize.js',
      './resources/bower_resources/angular-translate/angular-translate.js',
      './resources/bower_resources/angular-ui-select/dist/select.min.js',
      
      './resources/bower_resources/angular-modal-service/dst/angular-modal-service.min.js',
      './resources/bower_resources/jQuery-contextMenu/dist/jquery.contextMenu.js',
      './resources/lib/tagging.js',
      './resources/lib/notify.js',
      './resources/bower_resources/bootstrap-validator/dist/validator.js',
      './resources/bower_resources/twillio-video/dist/twilio-conversations.js',
      './resources/bower_resources/underscore/underscore-min.js',
      
      './resources/bower_resources/Caret.js/dist/jquery.caret.js',
      './resources/bower_resources/jquery.atwho/dist/js/jquery.atwho.min.js',

    ], 'public/js/depedencies.js')
    .jshint([

      './resources/assets/js/inner/**/*.js',


    ])
    
    .scripts(
      './resources/assets/js/inner/**/*.js'
      // './public/js/annotated.js'
    )

  .annotate(appScripts);

  
});

// elixir(function(mix) {
//     mix.version('public/css/dialogs.css','public');
// });





//old ways of compiling scripts
/* run javascript through jshint */
// var input  = {
      
//       'sass': './resources/assets/sass/*.scss',
//       'javascript':  './resources/assets/scripts/**/*.js'
//     };

//    var  output = {
      
//       'stylesheets': './public/css',
//       'javascript': './public/js'
//     };
    
    // var compileSASS = function (filename, options) {
    //   return sass('./public/scss/*.scss', options)
    //         .pipe(autoprefixer('last 2 versions', '> 5%'))
    //         .pipe(concat(filename))
    //         .pipe(gulp.dest(output.stylesheets+'/css'))
    //         .pipe(browserSync.stream());
    // };
    // gulp.task('sass', function() {
    //     return compileSASS('custom.css', {});
    // });
// gulp.task('jshint', function() {
//   return gulp.src(input.javascript)
//     .pipe(jshint())
//     .pipe(jshint.reporter('jshint-stylish'));
// });

// /* concat javascript files, minify if --type production */
// gulp.task('build-js', function() {
//   return gulp.src(input.javascript)
//     //  .pipe(ngAnnotate()) 
//     .pipe(sourcemaps.init())
      
//       .pipe(concat('annotated.js'))
//       //only uglify if gulp is ran with '--type production'
//       .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(output.javascript));
// });
// gulp.task('watch', function() {
//   gulp.watch(input.javascript, ['jshint', 'build-js']);
//   gulp.watch(input.sass, ['sass']);
//   // gulp.watch(input.html, ['copy-html']);
// });
// gulp.task('default', [ 'jshint', 'build-js', 'watch']);

