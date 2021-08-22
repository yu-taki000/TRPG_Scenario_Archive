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
  // フロントからsenarioItem形式でデータを取得(チェックはコントローラで行う)
  const data = JSON.parse(event.body ?? '');
  try {
    const ret = await controller.default.setItem(data);
    // 成功時には204 no contentで返す
    return httpResult(204);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

