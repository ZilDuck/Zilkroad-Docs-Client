FROM node:14.16.1

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN npm run build
WORKDIR ./docs/.vuepress/dist

EXPOSE 8080
CMD [ "http-server", ".", "-p", "8080" ]
