# sample-lambda-api-serverless

[lambda-api](https://github.com/jeremydaly/lambda-api)と[serverless framework](https://www.serverless.com/)を使用してAWS Lambdaを構築するサンプルリポジトリ。

## 使用方法

### 実行環境の準備

- Node18系がインストールされていること
- Docker環境がインストールされていること (Dockerに依存したコードは存在しないが、ドキュメントはDockerを前提に作成)

### AWS環境の準備

- AWS IAMからユーザを作成し、 `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` を取得していること
  - [ユーザに紐付けるpolicyの例](./docs\policy-sample.json)

### インストールと初期化

```sh
# git clone
git clone https://github.com/ljourm/sample-lambda-api-serverless.git
cd sample-lambda-api-serverless

# Dockerコンテナの起動
docker compose up -d

# 以降はコンテナ内で実行
docker-compose exec app bash
```

### Serverlessのコマンド例

```sh
# デプロイ
yarn serverless deploy

# デプロイしたリソースの削除
yarn serverless remove

# オフライン起動
yarn serverless offline --host 0.0.0.0
```
