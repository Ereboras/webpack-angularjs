var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        modules: [path.resolve(__dirname, "app"), "node_modules"],
        extensions: ['.ts', '.tsx', '.js'] 
    },
    module: { 
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
            { test: /\.js$/, loader: "source-map-loader", enforce: 'pre' },
            { test: /\.tsx?$/, use: "source-map-loader", enforce: 'pre' }
        ]
    },
    devtool: 'inline-source-map',
};