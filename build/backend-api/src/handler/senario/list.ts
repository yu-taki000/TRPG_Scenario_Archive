import * as lambda from 'aws-lambda';
import * as controller from '@/controller/senario'


const httpResult = (statusCode: number, body?: object) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

exports.handler = async function (event: lambda.APIGatewayEvent, context: lambda.Context) {
  // 開始ログ
  console.log('request:', JSON.stringify(event, undefined, 2));
  // DynamoDbから値を取得
  // 画面に表示する形式でデータを返却する
  try {
    const ret = await controller.default.getList();
    return httpResult(200, ret);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

