import webpack from 'webpack';

import HtmlWebPackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import paths from '../config/paths';

const common: webpack.Configuration = {
  entry: {
    game: [paths.src + '/game.ts'],
  },
  output: {
    path: paths.build,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    phaser: 'Phaser',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node-modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: [/\.vert$/, /\.frag$/],
        type: 'asset/source',
      },
      {
        test: /\.(?:ico|gif|png|jpe?g|svg|xml)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      'process.env': JSON.stringify(process.env),
    }),
    new HtmlWebPackPlugin({
      title: 'Moon Ark',
      template: paths.src + '/index.html.ejs',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: paths.src + '/assets', to: paths.build + '/assets' }],
    }),
  ],
};
export default common;
