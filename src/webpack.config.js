module.exports = {
    entry: [
        "./index.js"
    ],
    module: {
        loaders: [
            { test: /\.coffee$/, exclude: /node_modules/, loader: "coffee-loader" }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            }
        ]
    }
}