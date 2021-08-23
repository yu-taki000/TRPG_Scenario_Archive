import * as aws from 'aws-sdk';
import * as dynamoCdk from '#/lib/const/dynamoConst';

export class sequenceClient {
  constructor(
    private client: aws.DynamoDB.DocumentClient = new aws.DynamoDB.DocumentClient(),
    private tableName: string = dynamoCdk.sequenceProps.tableName) {
  }
  public async addIncremental(targetIndexa: string) {
    const param: aws.DynamoDB.DocumentClient.UpdateItemInput = {
      TableName: this.tableName,
      Key: {
        [dynamoCdk.sequenceProps.partitionKey.name]: targetIndexa,
      },
      UpdateExpression: 'SET current_number = current_number + :value',
      ExpressionAttributeValues: {
        ':value': 1
      },
      ReturnValues: 'UPDATED_NEW',
    }
    console.log(JSON.stringify(param));
    const ret = await this.client.update(param).promise();
    console.log(JSON.stringify(ret));
    return ret.Attributes?.current_number
  }
};
export const client = new sequenceClient();