# build environment
FROM node:20-bullseye-slim as build
WORKDIR /app

RUN apt-get update && apt-get install -y python3 build-essential jq

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install

COPY . ./

RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
