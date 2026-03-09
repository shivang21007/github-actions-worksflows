FROM node:22-alpine

RUN apk upgrade --no-cache

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 8000

CMD ["npm", "run", "start"]
