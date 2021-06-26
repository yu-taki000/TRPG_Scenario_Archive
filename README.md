# TRPG_Scenario_Archive (仮)

基本的な情報については[外部リンク](##外部リンク)を参照。
本ReadMeではリポジトリの基本的な構造を記載する

## ディレクトリ構成
本リポジトリで利用するのは主に以下のディレクトリである。

```
/
├─build
│  ├─front
│  ├─(back-end)
│  └─docs
├─cdk
├─docs
~
(略)
```

### cdk
AWSリソースを構築するためのコードを格納する。
[AWS CDKリファレンス](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)

### build
ビルド・トランスパイルが必要なファイルを配置する。

#### front
フロントエンドアプリケーションのソースコードを配置する
#### back-end
バックエンドAPI(AWS Lambda)のコードを配置する
(未作成)

#### (build/)docs
swaggerなど、git hubsでそのまま表示できないファイルを配置する。

#### (/)docs
build/docsから生成した静的ページを配置する。
git hubPagesで公開されている。

## 外部リンク

 - [このgitHubで作成しているものについて(目的)](https://github.com/yu-taki000/TRPG_Scenario_Archive/wiki/%E3%81%93%E3%81%AEgitHub%E3%81%A7%E4%BD%9C%E6%88%90%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%82%82%E3%81%AE%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
 - 設計
   - [アーキテクチャ設計思想など](https://github.com/yu-taki000/TRPG_Scenario_Archive/wiki/%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%81%E3%83%A3%E8%A8%AD%E8%A8%88%E6%80%9D%E6%83%B3%E3%81%AA%E3%81%A9)
   - [api仕様(swagger)](https://yu-taki000.github.io/TRPG_Scenario_Archive/api-swagger)

