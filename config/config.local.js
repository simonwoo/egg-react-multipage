const path = require('path');
const webpack = require("webpack");
const webpackConfig = require("../build/webpack.dev.config");

const publicPath = path.resolve(__dirname, '../app/public');

module.exports = {
  middleware: [ 'webpack' ],
  webpack: {
    compiler: webpack(webpackConfig),
    rest: {
        publicPath: '/static',
    }
  }
};
