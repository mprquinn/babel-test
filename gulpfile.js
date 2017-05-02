var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('default', function () {
  gulp.watch('js/build/*.js', function () {
    setTimeout(function () {
      gulp.start('babel');
    }, 100);
  });
});

gulp.task('babel', function () {
  return gulp.src('js/build/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('js'));
});
