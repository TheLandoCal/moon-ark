import path from 'path';

const paths: { [key: string]: string } = {
  root: path.resolve(__dirname, '..'),
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist'),
  modules: path.resolve(__dirname, '../node_modules'),
};

export default paths;
