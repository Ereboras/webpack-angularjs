var path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "app"),
            "node_modules"
        ],
        extensions: ['.ts', '.js'] 
    },
    module: { 
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    devtool: 'inline-source-map'
};