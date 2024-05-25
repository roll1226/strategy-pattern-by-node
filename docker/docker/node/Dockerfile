# ベースイメージとしてNode.jsを使用
FROM node:16

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# psqlクライアントをインストール
RUN apt-get update && apt-get install -y postgresql-client

# Prismaのスキーマを生成
RUN npx prisma generate

# アプリケーションを起動
CMD ["npm", "run", "dev"]
