const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    })
}

function html() {
    return src('app/pages/**/*.html')
    .pipe(fileinclude())
    .pipe(dest('app'))
    .pipe(browserSync.stream())
}

function styles() {
    return src([
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',
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
            'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
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

function scriptsShopItem() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
            'node_modules/rateyo/min/jquery.rateyo.min.js',
            'node_modules/slick-carousel/slick/slick.js',
            'app/js/shop-item.js'
        ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('/min.shop-item.js'))
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
    watch(['app/js/**/*.js', `!app/js/main.min.js`,  `!app/js/min.global.js`,  `!app/js/min.register.js`,  `!app/js/min.shop.js`, `!app/js/min.shop-item.js`], scriptsMain, scriptsRegister, scriptsShop, scriptsShopItem, globalScripts);
    watch((['app/**/*.html'])).on('change', browserSync.reload);
}


exports.html = html;
exports.styles = styles;
exports.scriptsMain = scriptsMain;
exports.scriptsRegister = scriptsRegister;
exports.scriptsShopItem = scriptsShopItem;
exports.globalScripts = globalScripts;
exports.scriptsShop = scriptsShop;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build);


exports.default = parallel( html, styles, globalScripts, scriptsMain, scriptsRegister, scriptsShop, scriptsShopItem, browsersync, watching);