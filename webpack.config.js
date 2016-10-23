var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var LESS_DIR = path.resolve(__dirname, 'src/client/less');

var config = {
    entry: { 
             bundle: [APP_DIR + '/index.jsx'], 
             less: [LESS_DIR + "/main.less"]
           },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module: {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            }, {
		test: /\.less$/,
		include: LESS_DIR,
		loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
	    }
        ]
    },
    plugins: [
    	new ExtractTextPlugin("./css/style.css")
    ]
};

module.exports = config;
