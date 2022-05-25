# syntax=docker/dockerfile:1
FROM node:16-slim as base

WORKDIR /usr/spelling-bee

COPY package*.json .
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY . .

RUN apt-get update
RUN apt-get install -y openssl

RUN npm install\
  && npm install -g typescript\
  && npm install -g nodemon
RUN npx prisma generate

RUN tsc

# EXPOSE 1337

CMD ["npm", "start"]