FROM node:18.2-alpine

WORKDIR /src
ADD package*.json ./
RUN apk add bash
RUN npm install

COPY . .
CMD ["npm", "run", "start:dev"]
