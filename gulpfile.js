var gulp = require('gulp'),
    server = require('gulp-server-livereload');

gulp.task('start', function() {
    gulp.src('./')
        .pipe(server({
            defaultFile:'index.html'
        }));
});