module.exports = {
  context: __dirname,
  entry: './app/app.js',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          stage: 1,
        },
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
    ]
  },
  devServer: {
    contentBase: "./public",
    noInfo: true,
    hot: false,
    inline: true,
    port: 3000,
  },
};
