const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
    new htmlWebPackPlugin({
      title: 'webpack study',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|jpeg|svg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|woff|woff2|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
};
