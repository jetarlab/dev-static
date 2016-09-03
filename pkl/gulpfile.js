var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create();

var reload =  browserSync.reload;

gulp.task('server', ['sass'], function(){
	browserSync.init({
		server: './'
	});
	gulp.watch("assets/sass/*.scss", ['sass']).on('change', reload);
	gulp.watch("./*.html").on('change', reload);
})

gulp.task('sass',  function(){
	gulp.src('assets/sass/*.scss')
	.pipe(autoprefixer())
	.pipe(sass())
	.pipe(gulp.dest('assets/css'));
});
 