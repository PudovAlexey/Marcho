const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    })
}

function styles() {
    return src([
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
    'app/scss/**/*.scss',
])
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function globalScripts() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
            'node_modules/rateyo/min/jquery.rateyo.min.js',
            'app/js/global.js'
        ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('min.global.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function scriptsMain() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
            'node_modules/rateyo/min/jquery.rateyo.min.js',
            'app/js/main.js'
        ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function scriptsRegister() {
    return src([
            'app/js/register.js'
        ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('/min.register.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function scriptsShop() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
            'node_modules/rateyo/min/jquery.rateyo.min.js',
            'app/js/shop.js'
        ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('/min.shop.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function images() {
    return src('app/images/**/*.*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest('dist/images'))
}

function build() {
    return src([
            'app/**/*.html',
            'app/css/style.min.css',
            'app/js/min.global.js',
            'app/js/main.min.js',
            'app/js/min.register.js',
            'app/js/min.shop.js'
        ], { base: 'app' })
        .pipe(dest('dist'))
}

function cleanDist() {
    return del('dist')
}

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', `!app/js/main.min.js`,  `!app/js/min.global.js`,  `!app/js/min.register.js`,  `!app/js/min.shop.js`], scriptsMain, scriptsRegister, scriptsShop, globalScripts);
    watch((['app/**/*.html'])).on('change', browserSync.reload);
}



exports.styles = styles;
exports.scriptsMain = scriptsMain;
exports.scriptsRegister = scriptsRegister;
exports.globalScripts = globalScripts;
exports.scriptsShop = scriptsShop;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build);


exports.default = parallel(styles, globalScripts, scriptsMain, scriptsRegister, scriptsShop, browsersync, watching);