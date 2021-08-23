import * as cdk from '@aws-cdk/core';
import * as node from '@aws-cdk/aws-lambda-nodejs';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';
import * as lambdaConst from './const/lambdaConst';
import ApiGWStack from './apiSubStack/apiStacks';
import DataStorageStack from './apiSubStack/DataStorageStack';

interface ApiResource{
  id:string
  entry:string
  method:'GET' | 'POST'
}
interface ApiInfo {
  apiPath:string,
  resources?:ApiResource[],
  subItem?:ApiInfo[]
}
export default class ApiRootStack extends cdk.Stack {
  public StorageStack:DataStorageStack;

  public ApiGWStack:ApiGWStack;

  private layerVersion:lambda.LayerVersion;

  private setProperty() {
    this.ApiGWStack = new ApiGWStack(this, ApiGWStack.name);
    this.StorageStack = new DataStorageStack(this, DataStorageStack.name);
  }

  private readonly props:ApiInfo = {
    apiPath: 'scenario',
    resources: [{
      id: 'senarioPost',
      entry: '../backend-api/src/handler/senario/post.ts',
      method: 'POST',
    }],
    subItem: [{
      apiPath: 'list',
      resources: [{
        id: 'senarioList',
        entry: '../backend-api/src/handler/senario/list.ts',
        method: 'GET',
      }],
    }],
  };

  private createApi(apiRoot:apigw.IResource, props:ApiInfo) {
    const apiResource = apiRoot.addResource(props.apiPath);

    props.resources?.forEach((item) => {
      const lambdaNode = new node.NodejsFunction(this, item.id, {
        runtime: lambda.Runtime.NODEJS_14_X,
        entry: item.entry,
        handler: 'handler',
        bundling: lambdaConst.bundlingOptions,
        layers: [this.layerVersion],
      });

      this.StorageStack.SenarioInfo.grantReadWriteData(lambdaNode);
      this.StorageStack.SequenceInfo.grantReadWriteData(lambdaNode);

      const integration = new apigw.LambdaIntegration(lambdaNode);
      apiResource.addMethod(item.method, integration, {
        apiKeyRequired: true,
      });
    });
  }

  private createLayerVersion() {
    this.layerVersion = new lambda.LayerVersion(this, 'layer', {
      compatibleRuntimes: [
        lambda.Runtime.NODEJS_14_X,
      ],
      code: lambda.Code.fromAsset('./layer/nodejs'),
    });
  }

  constructor(scope: cdk.App, id: string, props: cdk.StackProps) {
    super(scope, id, props);
    this.setProperty();
    this.createLayerVersion();
    this.createApi(this.ApiGWStack.ApiGw.root, this.props);
  }
}
