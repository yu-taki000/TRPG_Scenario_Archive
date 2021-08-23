import * as node from '@aws-cdk/aws-lambda-nodejs';

export const bundlingOptions: node.BundlingOptions = {
  minify: true,
  sourceMap: false,
  target: 'es2020',
  externalModules: [
    'aws-lambda',
    'aws-sdk',

    // cdkのmodule(型参照時に混入する模様)
    '@aws-cdk/assert',
    '@aws-cdk/aws-apigateway',
    '@aws-cdk/aws-dynamodb',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-nodejs',
    '@aws-cdk/aws-s3',
    '@aws-cdk/core',
    'source-map-support',
  ],
};
