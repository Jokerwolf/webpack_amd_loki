const path = require('path');

const output = {
  path: path.resolve(__dirname, 'dist/js/loki/'),
  filename: '[name].js',
  chunkFilename: '[name].js',
  publicPath: './js/loki/',
  library: 'loki/[name]',
  libraryTarget: 'amd',
  umdNamedDefine: true,
};

const rules = [
  {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-syntax-dynamic-import'],
      }
    }
  }
];

const optimization = {
};

const config = {
  mode: 'development',
  output,
  module: { rules },
  optimization,
  resolve: {
    alias: {
      loki: path.resolve(__dirname, 'src'),
    },
  },
};

module.exports = config;