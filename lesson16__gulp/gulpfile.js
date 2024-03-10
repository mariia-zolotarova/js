const {src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');


function Style() {
    return src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('../maps'))
        .pipe(dest('./Dist/css'))
}

function Html() {
    return src('./src/**/*.html')
        .pipe(dest('./Dist'))
}

function Watcher() {
    watch('./src/**/*.scss', Style)
    watch('./src/**/*.html', Html)

}

exports.default = parallel(Html, Style, Watcher);