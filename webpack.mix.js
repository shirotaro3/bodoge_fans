const mix = require('laravel-mix');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
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

// カスタム設定のmerge
mix.webpackConfig({
  plugins: [
    new DuplicatePackageCheckerPlugin(),
    new LodashModuleReplacementPlugin({
      collections: true,
      chaining: true,
      shorthands: true
    }),
    new CompressionPlugin({
      filename: '[path][base].gz[query]',
      test: /\.js$/,
    })
  ]
});

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