const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

function sassToCSS(done) {
    gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
    done();
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

function browserReload(done) {
    browserSync.reload();
    done();
}

function watchSass() {
    gulp.watch("./scss/**/*", sassToCSS);
    //  gulp.watch("./js/**/*", jsToCSS);
}

function watchFile() {
    gulp.watch("./scss/**/*", sassToCSS);
    gulp.watch("./**/*.html", browserReload);
    gulp.watch("./**/*.js", browserReload);
    gulp.watch("./**/*.php", browserReload);
}

gulp.task('default', gulp.parallel(sync, watchFile));
gulp.task(sync);