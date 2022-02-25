var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js',
        publicPath: '/'
    },
    devServer: {
        /*proxy: {
            '/': {
                target: 'http://localhost:8090',
                secure: false,
                prependPath: false
            }
        },*/
        historyApiFallback: true,
        //allowedHosts: ['all']
    },
    /*options: {
        allowedHosts: ['all']
    },*/
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|eot|otf|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
    ]
};