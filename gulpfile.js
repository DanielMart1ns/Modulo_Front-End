const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less')
const minifyless = require('gulp-css-minify');


function ComprimeLess(){
    return gulp.src('src/styles/main.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifyless())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('build/styles'))
}

exports.ComprimeLess = ComprimeLess