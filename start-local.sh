#! /bin/bash

# adicione o "sudo" na frente dos comandos abaixo caso seu usuário não tenha permissão para executar docker

docker network create external-network
docker compose -f docker-compose.local.yml up -d

## Use o comando abaixo caso esteja usando docker compose v1
# docker-compose -f docker-compose.local.yml up -d

#####################################################################

cd ./backend && npm start &
cd ./frontend && npm start &

echo "Aplicação rodando..."
wait
