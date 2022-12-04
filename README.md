# okmtyuta-enngineering Documentation

## 使用中のポート
|  使用するサービス  |  ポート番号  |
| ---- | ---- |
|  okmtyuta-engineering-api  |  8001  |
|  okmtyuta-engineering-client  |  3001  |
|  postgresql  |  4001  |

## Usage
各サービスのドキュメントも参照のこと。

### .envファイルを用意する
.envファイルをルートディレクトリに作成する。.envファイルに書く必要があることは以下の通り。
  - `OKMTYUTA_ENGINEERING_API_PORT`: APIのポート番号。数字である必要がある。
  - `POSTGRES_DB`: データベースのテーブル名。
  - `POSTGRES_USER`: データベースのユーザー名。
  - `POSTGRES_PASSWORD`: データベースのパスワード名。
  - `POSTGRES_PORT`: データベースのポート番号。数字である必要がある。

### Dockerの起動
各コマンドはMakefileで設定してあるので、具体的には次のコマンドを順番に実行する。
  - `build-okmtyuta-engineering-api`: APIのビルド。
  - `run-okmtyuta-engineering-api`: APIの起動。
  - `run-database`: データベースの起動。

### サービスの停止
  - `stop-database`: データベースの停止。
  - `stop-all-service`: 全てのサービスの停止。

## packagesのディレクトリ構成
```
packages/
　 ├ design/          : 設計図などを配置
　 ├ domain/          : ドメイン層
　 ├ infrastructure/  : インフラ層
　 ├ library/         : ライブラリ層
　 ├ presentation/    : プレゼンテーション層
　 │ 　 └ rest-api/   : APIを配置
　 │ 　 └ web/        : clientを配置
　 └ usecase/         : usecase層
```

## Reference
