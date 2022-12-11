FROM node:19.2-buster
ENV LANG C.UTF-8
ENV TZ "Asia/Tokyo"
ENV DEBCONF_NOWARNINGS=yes

# Create root directory
WORKDIR /okmtyuta

RUN apt-get update && apt-get install -y postgresql-client
RUN npm install -g npm@9.1.1

# root
COPY ./package*.json ./

# library以下
COPY ./packages/library ./packages/library
# domain以下
# COPY ./packages/domain ./packages/domain
# usecase以下
# COPY ./packages/usecase ./packages/usecase
# infrastructure以下
COPY ./packages/infrastructure ./packages/infrastructure
# okmtyuta-engineering-api以下
COPY ./packages/presentation/rest-api/okmtyuta-engineering-api ./packages/presentation/rest-api/okmtyuta-engineering-api

RUN npm install
RUN npm run build