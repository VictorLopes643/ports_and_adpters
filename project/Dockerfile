FROM node:20-slim

RUN apt update && apt install -y \
        curl \
        git \
        procps \
        iputils-ping \
        fonts-powerline

WORKDIR /home/node/app

COPY  package.* /home/node/app/ 

CMD [ ".docker/start-dev.sh" ]