FROM node:20.12.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["node", "dist/main.js"]
