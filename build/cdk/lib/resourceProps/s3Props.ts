import * as s3 from '@aws-cdk/aws-s3';

// 共通で設定するBucket設定を記述する
export const BasicProperty: s3.BucketProps = {
  blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
}
