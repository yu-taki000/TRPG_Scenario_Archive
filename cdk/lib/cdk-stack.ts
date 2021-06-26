import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Props from './resourceProps/s3Props'

const bucketProps = {
  bucketName: "scenario-archive-hosting-stack"
}
export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hostingS3 = new s3.Bucket(this, bucketProps.bucketName, s3Props.BasicProperty);
  }
}
