# Portfolio

自分の実績をまとめたポートフォリオサイトです。

## Overview

- [**Next**](https://nextjs.org/)
- [**TypeScript**](https://github.com/microsoft/TypeScript)
- [**microCMS**](https://microcms.io/)
- [**emotion**](https://emotion.sh/docs/introduction)

## Installing

yarn を使うので下記に従い yarn インストールしてください。

```bash
$ brew install yarn
```

## Building

### 依存モジュールをインストール。

```bash
$ yarn install
```

### 開発開始

```bash
$ yarn dev
```

### 本番環境生成

```bash
$ yarn build
```

開発をする際、`yarn start`をして頂き、[http://localhost:8080](http://localhost:8080) にブラウザにアクセスすればデバックできます。

`yarn build`で production フォルダ内に納品ファイルが生成されます。

## Structure

```bash
.
├── src     # 開発ファイル
├── public  # 静的ファイル
└── out     # 本番環境向
```
