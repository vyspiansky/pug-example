var gulp = require('gulp'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch');

// Run this task by typing `gulp pug` in CLI
gulp.task('pug', function() {
    return gulp.src('src/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('build'));
});

// Run this task by typing `gulp watch` in CLI
gulp.task('watch', ['pug'], function() {
    return gulp.watch('src/*.pug', ['pug']);
});