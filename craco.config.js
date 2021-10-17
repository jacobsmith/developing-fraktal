module.exports = {
    webpack: {
        configure: {
            module: {
                rules: [
                    {
                        test: /\.example.js$/i,
                        use: 'raw-loader',
                    },
                    {
                        test: /\.example.js$/i,
                        exclude: '/*.example.js',
                    }
                ],
            },
        },
    }
}
