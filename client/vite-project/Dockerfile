FROM node:18 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
