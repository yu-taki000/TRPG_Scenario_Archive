import * as lambda from 'aws-lambda';

exports.handler = async function (event: lambda.APIGatewayEvent, context: lambda.Context) {
  // 開始ログ
  console.log('request:', JSON.stringify(event, undefined, 2));
  // DynamoDbから値を取得
  // 画面に表示する形式でデータを返却する
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: `Hello, CDK! You've hit ${event.path}\n ${context.functionName}\n`,
  };
};
