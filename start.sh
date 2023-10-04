#! /bin/bash

# adicione o "sudo" na frente dos comandos abaixo caso seu usuário não tenha permissão para executar docker

docker network create external-network
docker compose up -d

## Use o comando abaixo caso esteja usando docker compose v1
# docker-compose up -d