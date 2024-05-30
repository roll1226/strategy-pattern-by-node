FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN apt-get update && apt-get install -y postgresql-client

RUN npx prisma generate

CMD ["npm", "run", "dev"]
