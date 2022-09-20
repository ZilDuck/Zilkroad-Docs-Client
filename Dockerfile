# Our Node base image
FROM node:14.16.1 as build

# Change our current working directory
WORKDIR /app

# Copy over `package.json` and lock files to optimize the build process
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# Install Node modules
RUN npm install -D

# Copy over rest of the project files
COPY . .

RUN npm run build

###
# Only copy over the Node pieces we need
###
FROM node:14.16.1

EXPOSE 8080
CMD ["node", "/docs/.vuepress/dist/index.html"]

