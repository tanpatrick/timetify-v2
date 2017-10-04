'use strict'

import path from 'path'
import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'

const nodeModules = path.resolve( path.join( __dirname, 'node_modules' ) );

module.exports = {
    context: __dirname + '/src',
    entry: './index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'assets/bundle.min.js'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 3000,
        disableHostCheck: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: [ '.jsx', '.json', '.js' ]
    },
    module: {
        rules: [ {
            test: /\.js[x]?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: [ 'env', 'react' ]
            }
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
        } ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './template.html',
            filename: 'index.html',
            inject: 'body'
        } )
    ]
}