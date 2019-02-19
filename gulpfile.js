const gulp = require('gulp'),
			less = require('gulp-less'),
			autoprefixer = require('gulp-autoprefixer'),
			cleanCSS = require('gulp-clean-css'),
			browserSync = require('browser-sync').create();

function styles(){
	return gulp.src('src/less//all.less')
	.pipe(less())
	.pipe(autoprefixer({
		browsers: ['> 0.1%'],
		cascade: false
	}))
	.pipe(cleanCSS({level: 2}))
	.pipe(gulp.dest('build/css'))
	.pipe(browserSync.stream());
}

function watch(){
	browserSync.init({
		server: {
				baseDir: "build"
		},
		// tunel: true
	});
	gulp.watch('build/*.html').on('change', browserSync.reload);
	gulp.watch('src/less//all.less', styles);
}

gulp.task('default', gulp.parallel(styles, watch));