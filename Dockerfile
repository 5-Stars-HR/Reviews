FROM node:10.15.3

RUN mkdir -p /src/reviews

WORKDIR /src/reviews

COPY ${pwd} /src/reviews

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "docker_me" ]
