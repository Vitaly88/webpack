const path = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',

    // indicates which module webpack should use to begin building dependency graph
    entry: { 
        main: './index.js',
        analytics: './analytics.js'
    },

    // tells where to emit the bundle it creates
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },

    devServer: {
        port: 3000
    },

    resolve: {
        extensions: ['.js', '.json', '.png', '.png'],
        alias: {
            'models': path.resolve(__dirname, './src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },

    // it generates files and removes them depending on the purposes after each build
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        // new webpack.HotModuleReplacementPlugin()
        new CleanWebpackPlugin()
    ],

    // module can add types of files and process them 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                include: [path.resolve(__dirname, './assets/fonts')],
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ]
    }
}