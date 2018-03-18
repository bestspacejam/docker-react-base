FROM node:9.6.1

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
RUN npm install --silent

# Копировать кофигурацию и скрипты лучше уже после "npm install".
COPY config config
COPY scripts scripts

EXPOSE 3000