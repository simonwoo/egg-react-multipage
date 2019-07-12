const webpack = require('webpack');
const path = require('path');

const webpath = path.resolve(__dirname, '../app/web');
const publicPath = path.resolve(__dirname, '../app/public');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(webpath, 'index.js')
    },
    devtool: 'source-map',
    output: {
        publicPath: '/static',
        filename: '[name].bundle.js',
    }
}