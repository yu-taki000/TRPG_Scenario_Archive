import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Props from '../resourceProps/s3Props';
import * as dynamoConst from '../const/dynamoConst';

export default class DataStorageStack extends cdk.NestedStack {
  public SenarioInfo: dynamodb.Table;

  public SequenceInfo: dynamodb.Table;

  public SenarioBucket: s3.IBucket;

  constructor(scope: cdk.Construct, id: string, props?: cdk.NestedStackProps) {
    super(scope, id, props);

    this.SenarioInfo = new dynamodb.Table(scope, dynamoConst.senarioInfoProps.tableName, {
      ...dynamoConst.senarioInfoProps,
      billingMode: dynamodb.BillingMode.PROVISIONED,
      readCapacity: 5, // 無料枠の上限は全テーブル合計25
      writeCapacity: 5, // 無料枠の上限は全テーブル合計25
      removalPolicy: cdk.RemovalPolicy.DESTROY, // TODO完成まではDestroy運用
    });

    this.SequenceInfo = new dynamodb.Table(scope, dynamoConst.sequenceProps.tableName, {
      ...dynamoConst.sequenceProps,
      billingMode: dynamodb.BillingMode.PROVISIONED,
      readCapacity: 5, // 無料枠の上限は全テーブル合計25
      writeCapacity: 5, // 無料枠の上限は全テーブル合計25
      removalPolicy: cdk.RemovalPolicy.DESTROY, // TODO完成まではDestroy運用
    });

    // シナリオ配置S3
    this.SenarioBucket = new s3.Bucket(scope, 'senarioS3', { removalPolicy: cdk.RemovalPolicy.DESTROY, ...s3Props.BasicProperty });
  }
}
