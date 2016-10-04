var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 8081
    },

    entry: 'main.js',
    resolve: {
        root: path.join(__dirname,'src')
    },

    module: {
        loaders: [
            {
              test: /\.js/,
              loaders: ['babel']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },

            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(gif|png|jpg|svg|woff2|woff|ttf|eot)$/,
                loader: 'file'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
