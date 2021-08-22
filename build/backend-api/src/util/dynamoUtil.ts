import * as aws from 'aws-sdk';
import * as dynamoCdk from '#/lib/const/dynamoConst';
import * as types from '@/controller/types';

export class dynamoClient {
  constructor(
    private client: aws.DynamoDB.DocumentClient = new aws.DynamoDB.DocumentClient(),
    private tableName: string = dynamoCdk.senarioInfoProps.tableName) {
  }
  public async getByKey(value: string) {
    const param: aws.DynamoDB.GetItemInput = {
      TableName: this.tableName,
      Key: {
        [dynamoCdk.senarioInfoProps.partitionKey.name]: { SS: [value] }
      }
    }
    const ret = await this.client.get(param).promise();
    console.log(JSON.stringify(ret));
    return ret.Item
  }
  public async getList(): Promise<unknown[]> {
    const ret = await this.client.scan({
      TableName: this.tableName,
    }).promise();
    return ret.Items?.map(item => item) ?? []
  }
  public async setItem(item: types.SenarioItem): Promise<boolean> {
    const putItem: aws.DynamoDB.DocumentClient.PutItemInput = {
      Item: item,
      TableName: this.tableName
    }
    try {
      const ret = await this.client.put(putItem).promise();
      console.info('putResult:', JSON.stringify(ret));
      return true;
    } catch (e) {
      console.error('putErro:', JSON.stringify(e));
      return false;
    }
  }
};
