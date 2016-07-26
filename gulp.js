var     gulp = require('gulp'),
        compass = require('gulp-compass'),
        plumber = require('gulp-plumber'),
        minifyCSS = require('gulp-minify-css');
 
gulp.task('compass', function() {
  gulp.src('sass/*.scss')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(compass({
      css: 'assets/css',
      sass: 'assets/sass',
      image: 'assets/images'
    }))
    .on('error', function(err) {
      // Would like to catch the error here 
    })
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/temp'));
});