FROM node:14.16.1

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD  [ "npm", "run", "dev" ]
