var gulp = require('gulp'),
  sass = require('gulp-sass'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  plumber = require('gulp-plumber'),
  stylish = require('jshint-stylish'),
  browserSync = require('browser-sync').create(),
  sourcemaps = require('gulp-sourcemaps'),
  minify = require('gulp-minify-css');

gulp.task('clean-styles', function() {
  return gulp.src('src/build/*.css', { read: false }).pipe(clean());
});

gulp.task('clean-scripts', function() {
  return gulp.src('src/build/*.js', { read: false }).pipe(clean());
});

gulp.task('styles', ['clean-styles'], function() {
  return gulp
    .src('src/css/core.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('src/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify())
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('src/build'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', ['clean-scripts'], function() {
  return gulp
    .src(['src/js/app.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      jshint({
        jquery: true
      })
    )
    .pipe(jshint.reporter(stylish))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('src/build'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('browser-sync', ['styles', 'scripts'], function() {
  browserSync.init({
    startPath: 'src/',
    server: {
      baseDir: './'
    },
    proxy: 'localhost:8080'
  });
});

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/css/**/*.scss', ['styles']);
  // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);
  // Watch .html files
  gulp.watch('src/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', function() {
  gulp.start('styles', 'scripts', 'browser-sync', 'watch');
});
