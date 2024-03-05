
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
mode: 'development',
entry: './src/main.js',
output: {
    path: __dirname + '/dist',
    filename:'bundle.js'
},

resolve: {
    extensions: ['.ts', '.js',  '.json','.wasm'],
  },

    module: {
      rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader']
    },

    {
        test: /\.html$/i,
        loader: "html-loader",
      },

{
        test: /\.s[ac]ss$/i,
        use: ["style-loader","css-loader","sass-loader",],
    }
      ],
    },


plugins: [ new HTMLWebpackPlugin ({
    template: './src/index.html'}
    )]

}