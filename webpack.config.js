'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

console.log(__dirname);

module.exports = {
    context: __dirname + "/www/js",
	entry: "./app",
    output: {
        path: __dirname + "/www/js",        
        filename: "build.js"
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
    	aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? 'inline-source-map' : null,

    module: {

    	loaders: [{
    		test: /\.js$/,
    		loader: 'babel',
    		query: {
    			presets: ['es2015']
    		}
    	}]

    }

};