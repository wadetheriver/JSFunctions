var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    sourcemaps = require('gulp-sourcemaps');


var coffeeSources = [
  './*.coffee'
]

// Make destination in components/js
// process with other components/js files (if there are any)
gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(coffeeSources, ['coffee']);
});
