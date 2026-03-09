FROM node:22-alpine AS builder

RUN apk upgrade --no-cache

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_GITHUB_SHA
ENV VITE_GITHUB_SHA=$VITE_GITHUB_SHA

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

FROM nginx:alpine AS runner

RUN apk upgrade --no-cache

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
