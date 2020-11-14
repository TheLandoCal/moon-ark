import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './common';

import paths from '../config/paths';

const port = process.env.PORT || '8000';

const config: webpack.Configuration = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.build,
    port: parseInt(port),
    open: true,
    onListening: function () {
      console.log(`⚡️[server]: Running on port: ${port}`);
    },
  },
  performance: {
    hints: false,
  },
});
export default config;
