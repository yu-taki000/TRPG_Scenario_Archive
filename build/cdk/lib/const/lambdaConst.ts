import * as node from '@aws-cdk/aws-lambda-nodejs';

export const bundlingOptions: node.BundlingOptions = {
  minify: true,
  sourceMap: false,
  target: 'es2020',
};
