module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: __dirname,
    filename: './dist/main.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
