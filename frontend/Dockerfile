#######################################################################
######################### IMAGEM PARA BUILD ###########################
#######################################################################
FROM node:18-alpine AS angular

WORKDIR /app
COPY . .
RUN npm install --silent --progress=false

RUN npm run build


#################################################################
################# EXECUTANDO O SERVIDOR WEB #####################
#################################################################

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist /usr/share/nginx/html

RUN rm /usr/share/nginx/html/50x.html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

###################################################
