FROM node:boron


# Create app directory

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app


# Install app dependencies

COPY package.json /usr/src/app/
COPY bower.json /user/src/app/

RUN npm install
RUN npm install bower -g

# Bundle app source

COPY . /usr/src/app


EXPOSE 8080

CMD ["bower", "install"]
CMD [ "npm", "start" ]
