## アーキテクチャの思想・サービス選定の指針
- とりあえずコスト・要素は最低限で構成する
  - CDNやWAFなどは導入しない(ドメインは場合によっては無料ドメインを取得するかも)
- ドキュメントDB(DynamoDB,Cosmos)などの設計を色々試してみたい

## 利用技術
- クラウド
  - aws:Lambda,S3,Cognito(Auth0に消り変える可能性あり),DynamoDB
  - IaC:CloudFormation,CDK(TypeScript)
- サーバサイド
  - Node14 + TypeScript
- フロント
  - Vue3 + primeVue

## 実装方針
- クライアント(vue)でザックリとした画面を実装
  - シナリオの投稿
  - リスト表示
  - ログイン画面
- CognitoとtwitterIDの連携 
- Cognitoユーザプール上で保持するデータ設計
  - api
- Dynamoでのデータ保持の仕方の検討
- フロントとCognitoで認証の実装(Amplifyのモジュールを利用予定)
  - 検討したうえでCognitoが使いづらかったらAuth0への切り替えも視野に入れる


## システム上でほしい機能
- シナリオをDLした人
- そのシナリオを遊んだ人が他に遊んでるシナリオ
- シナリオのDL数
- シナリオの評価(1人1票○ or ☓)
