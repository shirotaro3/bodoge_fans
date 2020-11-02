const mix = require('laravel-mix');
require('laravel-mix-bundle-analyzer');

// bundleAnalyzer
if (!mix.inProduction()) {
  mix.bundleAnalyzer({
    // ビルドの度にアナライザーが開かないようにする
    openAnalyzer: false,
    // docker環境でも開けるようにホストを変更
    analyzerHost: '0.0.0.0'
  });
}

// // カスタム設定のmerge
// mix.webpackConfig({
//   resolve: {
//     mainFields: ['module', 'main'],
//     extensions: ['.ts', '.tsx', '.js', '.mjs'],
//   }
// });

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

mix.react('resources/js/app.js', 'public/js');