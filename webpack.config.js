var webpack = require('webpack');

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
        loader: 'babel?stage=1',
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

// Add optimization plugins when generating the final bundle
if (process.env.WEBPACK_ENV === 'production') {
  module.exports.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unsafe: true,
        warnings: false,
      },
    }),
  ];
}
