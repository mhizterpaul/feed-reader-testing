/*eslint-env node */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');

gulp.task('default', function(){
	gulp.watch('src/jasmine/spec/**/*.js')
	.on('change', browserSync.reload);
	browserSync.init({server: './src'});
	
});

gulp.task('lint', function() {
	return gulp.src('src/jasmine/spec/**/*.js')
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failOnError());
});

gulp.task('dist', [

	'copy-html',
	'copy-css',
	'copy-fonts',
	'copy-javascript'

	]);


gulp.task('copy-javascript', function(){
	gulp
	.src('src/js/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/js'));

});

gulp.task('copy-css', function(){
	gulp
	.src('src/css/**/*.css')
	.pipe(concat('all.css'))
	.pipe(gulp.dest('dist/css'));

});

gulp.task('copy-html', function(){
	gulp
	.src('src/index.html')
	.pipe(gulp.dest('./dist'));

});

gulp.task('copy-fonts', function(){
	gulp
	.src('src/fonts/*')
	.pipe(gulp.dest('./dist/fonts'));

});

