const path = require('path');

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  // 默认是输出在dist, 而且是index.js
  output: {
    filename: '[id].js',
    path: path.resolve(__dirname, 'build'),
  },
  builtins: {
    html: [{
      template: './src/index.html'
    }]
  },
  devServer: {
    port: 3333
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              // ...
            },
          },
        ],
        type: 'css',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset'
      }
    ],
  },
};