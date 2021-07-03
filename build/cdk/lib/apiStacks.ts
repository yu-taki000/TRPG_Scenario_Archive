import * as cdk from '@aws-cdk/core';
import * as apigw from '@aws-cdk/aws-apigateway';
import * as apiGwConst from './const/apiGwConst';

export default class ApiGWStack extends cdk.NestedStack {
  public ApiGw: apigw.RestApi;

  constructor(scope: cdk.Construct, id: string, props?: cdk.NestedStackProps) {
    super(scope, id, props);

    // defines an API Gateway REST API resource backed by our "hello" function.
    this.ApiGw = new apigw.RestApi(this, `${ApiGWStack.name}GW`, {
      defaultCorsPreflightOptions: apiGwConst.corsProps,
    });
    const apiKey = this.ApiGw.addApiKey('defaultKeys');
    this.ApiGw.addUsagePlan(`${ApiGWStack.name}UsagePlan`).addApiKey(apiKey);
  }
}
