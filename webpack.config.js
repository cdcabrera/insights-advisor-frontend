/* global require, module */

const _ = require('lodash');
const webpackConfig = require('./config/base.webpack.config');
const config = require('./config/webpack.common.js');

webpackConfig.devServer = {
    contentBase: config.paths.public,
    hot: true,
    port: 8002,
    disableHostCheck: true,
    historyApiFallback: true
};

module.exports = _.merge({},
    webpackConfig,
    require('./config/base.webpack.plugins')
);
