FROM mhart/alpine-node:10.14.1

# Build arguments that need to be present for build phase
# ARG DROP_CONSOLE

# Environment variables that need to be present for deploy phase
# ENV DROP_CONSOLE=$DROP_CONSOLE

# Create directories all the way up to app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock /usr/src/app/
RUN yarn install

# Bundle app source
COPY . /usr/src/app

# build
RUN yarn build
EXPOSE 3000

CMD [ "node", "server.js" ]
