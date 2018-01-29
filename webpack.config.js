const path = require('path');
// const webpack = require('webpack');

const config = {
    context: path.resolve(__dirname),
    entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
    output:{
        path: path.resolve(__dirname, 'build'),
        filename:'[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname, 'src', 'js'),
            "node_modules",
        ]
    },
    devServer:{
        inline:true,
        port:8000
    },
    module:{
        loaders:[{
            test:/\.jsx?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query:{
                presets:['es2015', 'react']
            }
        }]
    }
};

module.exports = config;
