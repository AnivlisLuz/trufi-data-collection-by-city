FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update
RUN apt install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs

WORKDIR /app

COPY ./tiles_downloader .

ENTRYPOINT [ "node", "index.js" ]