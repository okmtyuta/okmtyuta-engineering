# okmtyuta-engineering Documentation
<div style="text-align: center;">
    <img alt="okmtyuta icon" src="public/global_okmtyuta.png" width="300">
</div>

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
  - `ENVIRONMENT`: 実行環境: `development || production`
  - `OKMTYUTA_ENGINEERING_API_PORT`: APIのポート番号。数字である必要がある。
  - `POSTGRES_DB`: データベースのテーブル名。
  - `POSTGRES_USER`: データベースのユーザー名。
  - `POSTGRES_PASSWORD`: データベースのパスワード名。
  - `POSTGRES_PORT`: データベースのポート番号。数字である必要がある。
  - `PRODUCTION_DATABASE_HOST`: production環境のデータベースホストの名前。一般に`database`

### ビルドする
ルートディレクトリで`npm run build`を実行すると全体をビルドできる。

### Dockerの起動
各コマンドはMakefileで設定してあるので、具体的には次のコマンドを順番に実行する。
  - `build-okmtyuta-engineering-api`: APIのビルド。
  - `up-okmtyuta-engineering-api`: APIコンテナの起動。
  - `run-okmtyuta-engineering-api`: APIの起動。

  - `build-database`: データベースのビルド。
  - `run-database`: データベースの起動。

### サービスの停止
  - `stop-database`: データベースの停止。
  - `stop-okmtyuta-engineering`: APIの停止。

## packagesのディレクトリ構成
```
packages/
　 ├ design/          : 設計図などを配置
　 ├ domain/          : ドメイン層
　 ├ infrastructure/  : インフラ層
　 ├ library/         : ライブラリ層
　 ├ presentation/    : プレゼンテーション層
　 │ 　 └ api/        : APIを配置
　 │ 　 └ client/     : clientを配置
　 └ usecase/         : usecase層
```

## Mode Documents
If you want to know more information, you can see docs directory.

## References

## Update Log
Updated at 4th December 2022
Updated at 18th December 2022

## License
To be prepared.
