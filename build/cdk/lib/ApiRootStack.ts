import * as cdk from '@aws-cdk/core';
import * as node from '@aws-cdk/aws-lambda-nodejs';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';
import * as lambdaConst from './const/lambdaConst';
import ApiGWStack from './apiStacks';

export default class ApiRootStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    const hello = new node.NodejsFunction(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      entry: '../backend-api/src/handler/sampleHandler.ts',
      handler: 'handler',
      bundling: lambdaConst.bundlingOptions,
    });
    const helloIntegration = new apigw.LambdaIntegration(hello);

    const apiStack = new ApiGWStack(this, ApiGWStack.name);
    // defines an API Gateway REST API resource backed by our "hello" function.
    const senarioRoot = apiStack.ApiGw.root.addResource('senario');
    senarioRoot.addMethod('GET', helloIntegration, {
      apiKeyRequired: true,
    });
  }
}
