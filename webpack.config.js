const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?https://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
      contentBase: './build',
      hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};
