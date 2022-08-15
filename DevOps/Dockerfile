FROM node:lts-alpine3.16


WORKDIR /

ADD . /


EXPOSE 80


RUN npm install

RUN npm run build

ENTRYPOINT npm run start