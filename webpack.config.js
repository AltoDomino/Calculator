const path = require("path")

module.exports = {
    mode: 'development',
    entry: './calculator.ts',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'calculator.bundle.js',
    },
    module: {
        rules:[
            {
            test:/\.ts/,
            use: 'ts-loader',
            exclude: /node-modules/
            }
        ]
    },
    resolve: {
        extensions : ['.ts', '.js'] 
    }
}