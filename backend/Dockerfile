#######################################################################
######################### IMAGEM PARA BUILD ###########################
#######################################################################

FROM alpine:latest AS builder

WORKDIR  /var/www

COPY . .

RUN apk add --update nodejs npm

RUN npm install --silent --no-progress --ignore-scripts
RUN npm run build


#######################################################################
##################### IMAGEM MÍNIMA PARA RODAR ########################
#######################################################################

FROM alpine:latest

WORKDIR /

COPY --from=builder /var/www/dist ./dist
COPY --from=builder /var/www/*.json ./
COPY --from=builder /var/www/.env.container ./

ARG NODE_ENV=production

RUN apk add --update nodejs npm
RUN npm ci --silent --no-progress --production --ignore-scripts

ENTRYPOINT npm run start:prod