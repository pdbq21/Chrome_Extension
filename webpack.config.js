//var path = require('path');
const { resolve, join } = require('path');
const webpack = require("webpack");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './index.js'
        // the entry point of our app
    ],
    output: {
        filename: 'bundle.js',
        // the output bundle

        path: resolve(__dirname, 'dist'),

        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },

    context: resolve(__dirname, 'src'),

    devtool: 'inline-source-map',

    watch: true,

    watchOptions: {
        aggregateTimeout: 300, // The default
        poll: true, // poll: 1000 // Check for changes every second
        ignored: /node_modules/
    },

    devServer: {
        //contentBase: false,
        contentBase: join(__dirname, "dist"),
        compress: false,
        //host: "0.0.0.0",
        port: 3000,
        noInfo: true,
        watchContentBase: true,
        watchOptions: {
            poll: true
        },
        open: true,
        lazy: true,
        hot: true,
        // enable HMR on the server

        publicPath: '/'
        // match the output `publicPath`
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                ],
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['public'] }
        })
    ],
};