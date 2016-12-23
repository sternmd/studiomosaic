var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    cache       = require('gulp-cache'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    notify      = require('gulp-notify'),
    rename      = require('gulp-rename'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    sourcemaps  = require('gulp-sourcemaps'),
    minify      = require('gulp-minify-css');

gulp.task('styles', function () {
  return gulp.src('css/core.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('build'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minify())
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src(['js/app.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('browser-sync', ['styles', 'scripts'], function() {
    browserSync.init(null, {
        server: {
            baseDir: './'
        },
        host: "localhost"
    });
});

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('css/**/*.scss', ['styles']);
  // Watch .js files
  gulp.watch('js/*.js', ['scripts']);
  // Watch .html files
  gulp.watch("*/**.html").on('change', browserSync.reload);
});

gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'browser-sync', 'watch');
});
