const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'source-map'
    })
    .sourceMaps()
}

mix
    // .sass('resources/sass/app.scss', 'public/css')
    //.js('resources/js/image-manager/index.js', 'public/js/image-manager.js')
    .react('resources/js/image-manager/index.js', 'public/js/image-manager.js')
    
    .browserSync({
        host: 'www.react-laravel.test',
        port: 3000,
        proxy: {
            target: 'http://www.react-laravel.test:8080',
        }
    });


//Add versioning
mix.version();
