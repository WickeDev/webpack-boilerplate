module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        filename: 'assets/bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: 'assets',
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};