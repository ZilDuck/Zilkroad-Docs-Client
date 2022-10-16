FROM node:14.16.1 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
EXPOSE 80
RUN npm run build
WORKDIR ./docs/.vuepress/dist

EXPOSE 8080
CMD [ "http-server", ".", "-p", "8080" ]
