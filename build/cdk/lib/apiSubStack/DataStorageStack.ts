import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Props from '../resourceProps/s3Props';

export default class DataStorageStack extends cdk.NestedStack {
  public SenarioInfo: dynamodb.Table;

  public SenarioBucket: s3.IBucket;

  constructor(scope: cdk.Construct, id: string, props?: cdk.NestedStackProps) {
    super(scope, id, props);

    this.SenarioInfo = new dynamodb.Table(scope, 'SenarioInfo', {
      partitionKey: { name: 'senarioId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PROVISIONED,
      readCapacity: 25, // 無料枠の上限
      writeCapacity: 25, // 無料枠の上限
      removalPolicy: cdk.RemovalPolicy.DESTROY, // TODO完成まではDestroy運用
    });
    // シナリオ配置S3
    this.SenarioBucket = new s3.Bucket(scope, 'senarioS3', s3Props.BasicProperty);
  }
}
