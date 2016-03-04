var gulp = require('gulp'),
	compass   = require('gulp-compass'),
	cssnano   = require('gulp-cssnano'),
	concatCss = require('gulp-concat-css'),
	concat    = require('gulp-concat'),
	uglify    = require('gulp-uglify'),
	jshint    = require('gulp-jshint'),
	rename    = require('gulp-rename');

var paths = {
	compass:   ['sass/*.sass'],
	concatcss: [
		'bower_components/bootstrap/dist/css/bootstrap.min.css',
		// 'public/libraries/formvalidation/dist/css/formValidation.min.css',
		// 'public/libraries/Slidebars/dist/slidebars.min.css',
		// 'public/libraries/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
		// 'public/libraries/malihu-custom-scrollbar/jquery.jquery.mCustomScrollbar.min.css',
		'css/style.css'
	],
	js: [
		// 'bower_components/jquery/dist/jquery.min.js',
		// 'bower_components/bootstrap/dist/js/bootstrap.min.js',
		// 'public/libraries/formvalidation/dist/js/formValidation.js',
		// 'public/libraries/formvalidation/dist/js/framework/bootstrap.js',
		// 'public/libraries/formvalidation/dist/js/language/es_ES.js',
		// 'public/libraries/Slidebars/dist/slidebars.js',
		// 'public/libraries/moment/min/moment-with-locales.min.js',
		// 'public/libraries/moment/locale/es.js',
		// 'public/libraries/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
		// 'public/libraries/malihu-custom-scrollbar/jquery.mCustomScrollbar.concat.min.js',
		'js/script.js'
	],
	jshint: ['js/script.js']
}

gulp.task('compass', function(){
	gulp.src(paths.compass)
		.pipe(compass({
			css: 'css',
			sass: 'sass',
			image: 'images'
		}))
		.pipe(cssnano())
		.pipe(gulp.dest('css'));
});

gulp.task('js', function(){
	gulp.src(paths.js)
		// .pipe(concat('main.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('js/'));
});

gulp.task('concatcss', function(){
	gulp.src(paths.concatcss)
		.pipe(concatCss('master.css'))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('css'));
});

gulp.task('jshint', function(){
	gulp.src(paths.jshint)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('watch', function(){
	gulp.watch(paths.jshint, ['jshint']);
	gulp.watch(paths.compass, ['compass']);
	gulp.watch(paths.js, ['js']);
	// gulp.watch(paths.concatcss, ['concatcss']);
});

gulp.task('default', ['concatcss', 'jshint', 'js']);
gulp.task('dev', ['watch']);

// gulp.task('default', ['compass', 'js', 'concatcss']);