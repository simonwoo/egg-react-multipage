const webpackMiddleware = require("koa-webpack-dev-middleware");

module.exports = (options, app) => {
    return webpackMiddleware(options.compiler, options.rest);
}