const path = require('path')

const isDebug = !process.argv.includes('--env.release')

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'components'),
        ],
        use: 'babel-loader',
      },
      {
        test: /\.css/,
        include: [
          path.resolve(__dirname, 'components'),
        ],
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: true,
              modules: true,
              localIdentName: isDebug ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
              sourceMap: isDebug,
              minimize: !isDebug,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '/public'),
  },
}
