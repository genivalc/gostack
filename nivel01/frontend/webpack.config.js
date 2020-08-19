const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/, // termina com .js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //conveter o arquivo
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,  //testar as extresões 
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    },
};