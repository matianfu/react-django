
var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {

    context: __dirname,

    entry: './assets/js/index',

    output: {
        path: path.resolve('./assets/bundles/'),
        publicPath: 'assets/bundles/',
        filename: "main.js"
    },

    plugins: [
        new BundleTracker({
            filename: './webpack-stats.json'
        }),
    ],

    module: {

        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',    // official doc says: babel-loader works either
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ],
    },

    resolve: {
        modulesDirectories: [ 'node_modules' ],
        extensions: [ '', '.js', '.jsx']
    },
}


