var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', gulp.series(function() {
    return gulp.src('./scss/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        // para comprimir o css
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        // Qual o destino
        .pipe(gulp.dest('./css/min'));
}));

gulp.task('sass:watch', function() {
    gulp.watch('./scss/**/*.scss', gulp.parallel(['sass']));
});