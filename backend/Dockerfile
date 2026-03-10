FROM node:22-alpine

RUN apk upgrade --no-cache && apk add --no-cache curl

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "start"]
