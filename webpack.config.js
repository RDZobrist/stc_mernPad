
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
   {
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        exclude: "/node_modules"
      }]

  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};