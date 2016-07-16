'use strict'

const gulp = require('gulp')
const concatCss = require('gulp-concat-css')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const runSequence = require('run-sequence')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('concat', () => {
  return gulp.src('assets/**/*.css')
    .pipe(concatCss('main.css'))
    .pipe(gulp.dest('dist'))
})

gulp.task('prefixer', () => {
  return gulp.src('dist/main.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('min', () => {
  return gulp.src('dist/main.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
})

gulp.task('build', () => runSequence('concat', 'prefixer', 'min'))

gulp.task('default', ['build'])
