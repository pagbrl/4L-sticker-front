var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('assets/js/libs/*.js', ['js_libs']);
    gulp.watch('assets/js/app/*.js', ['js_app']);
    gulp.watch('assets/sass/*.scss', ['sass']);
});

gulp.task('js_libs', function(){
    return gulp.src('assets/js/libs/*.js')
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('assets/js/dist'))
});

gulp.task('js_app', function(){
    return gulp.src('assets/js/app/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('assets/js/dist'))
});

// Compile Sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
});

// PROD TASKS
gulp.task('js_libs_prod', function(){
    return gulp.src('assets/js/dist/vendors.js')
        .pipe(concat('vendors.js'))
        .pipe(uglify('vendors.js'))
        .pipe(gulp.dest('assets/js/dist'))
});

gulp.task('js_app_prod', function(){
    return gulp.src('assets/js/dist/app.js')
        .pipe(concat('app.js'))
        .pipe(uglify('app.js'))
        .pipe(gulp.dest('assets/js/dist'))
});

