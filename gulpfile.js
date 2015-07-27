var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('js', function () {
    gulp.src('./src/app.js')
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', function(){
    gulp.run('js');
});

gulp.watch('./src/*', function () {
     gulp.run('js');
});