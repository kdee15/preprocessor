var gulp = require('gulp'),
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    minifyCSS = require('gulp-minify-css');
 
gulp.task('compass', function() {
  gulp.src('scss/**/*')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'assets/css/stylesheets'
    }))
    .pipe(gulp.dest('app/assets/temp'));
});