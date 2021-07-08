# Create image based on the official Node image from dockerhub
FROM node:lts-buster-slim

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Install dependecies
RUN npm ci

# Redefine $APP_PATH otherwise its value is not passed through
arg APP_PATH
VOLUME ${APP_PATH}/frontend:/usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
