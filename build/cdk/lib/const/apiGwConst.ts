import * as apigw from '@aws-cdk/aws-apigateway';

// 共通のCORS設定を記述する
// TODO 将来的にはパラメータ(引数)で変更できるようにしたい
export const corsProps: apigw.CorsOptions = {
  allowOrigins: apigw.Cors.ALL_ORIGINS,
  allowHeaders: apigw.Cors.DEFAULT_HEADERS,
  allowMethods: apigw.Cors.ALL_METHODS,
  allowCredentials: false,
  disableCache: true, // 確かキャッシュはバグを内包してる(ハズ)
}