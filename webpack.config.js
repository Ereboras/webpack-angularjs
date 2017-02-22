var path = require('path');
console.log(path.resolve(__dirname, 'app/node_modules'));

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
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
    devtool: 'inline-source-map'
};