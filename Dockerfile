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

RUN npm run dev

###
# Only copy over the Node pieces we need
###
FROM node:14.16.1

WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.svelte-kit /.svelte-kit
COPY package.json .

# Set the port env
ENV PORT=3049

EXPOSE 3049
CMD ["node", "./build/index.js"]

