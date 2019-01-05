const path = require('path');

const entry = {
  'master': './src/master.js',
  'components': './src/components.js',
};
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
  runtimeChunk: {
    name: '../runtime'
  },
};

const config = {
  mode: 'development',
  entry,
  output,
  module: { rules },
  optimization,
};

module.exports = config;