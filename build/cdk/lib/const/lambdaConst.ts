import * as node from '@aws-cdk/aws-lambda-nodejs'

export const bundlingOptions: node.BundlingOptions = {
  minify: true,
  sourceMap: true,
  target: 'es2020',
}