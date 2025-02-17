FROM node:20
WORKDIR /app
COPY . /app

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
RUN npm set registry https://registry.npmmirror.com/
RUN npm i

CMD echo $SERVER_NAME && echo $AUTHOR_NAME && npm run serve && npx pm2 log

ENV SERVER_NAME=brick
ENV AUTHOR_NAME=jschen