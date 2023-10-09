# Multitenancy Subdomain with Angular and NestJS 🚀

### 🌐 Aplicação de Tenants, Sub-Tenants e Subdomínios exclusivos para cada tenant, utilizando Angular 16+ e NestJS 10+

Esta aplicação foi desenvolvida como uma POC (Proof-of-Concept). Seu intuito não é ser completa nem ter uma interface "bonita" ou bem elaborada. Seu intuito é apenas para ser utilizada como referência futura, para aplicação de arquiteturas de Multi Tenants com [Angular](https://angular.io/), onde cada Tenant tem seu próprio subdomínio.
Da mesma forma, outro intuito da POC é demonstrar como podemos lidar com Tenants com subdomínios exclusivos pelo Backend, utilizando [NestJs](https://nestjs.com/).


### Tecnologias utilizadas
- [Angular](https://angular.io/)
- [NestJS](https://nestjs.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Nginx](https://www.nginx.com/)
- [DNS records](https://www.cloudflare.com/learning/dns/dns-records/)

### 📦 Rodando a aplicação em container

Para rodar em container, rode o arquivo `start-container.sh` pelo terminal, geralmente acessando a pasta do projeto pelo terminal e digitando `./start-container.sh`
Você precisará ter o Docker e o Docker Compose instalados. Se tiver algum problema para rodar, veja o script `start-container.sh`, existem algumas orientações extras lá.

### 🖥️ Rodando a aplicação localmente

Para rodar localmente, rode o arquivo `start-local.sh` pelo terminal, geralmente acessando a pasta do projeto pelo terminal e digitando `./start-local.sh`
Você precisará ter o Docker e o Docker Compose instalados. Se tiver algum problema para rodar, veja o script `start-local.sh`, existem algumas orientações extras lá.

### ⚠️ Observações para servidores reais e domínios que não sejam "localhost"

O `localhost` de nossa máquinas redireciona todas as requisição de `*.localhost` (entenda-se "todos os subdomínios de localhost") para `localhost`. Isso não acontece em domínios com [TLD](https://www.hostinger.com.br/tutoriais/o-que-e-tld).
Para configurar o uso de subdomínios de forma que todos os subdomínios apontem para o domínio principal, da mesma forma que é feita localmente, você precisará, em seu serviço de registro de domínio / configuração de DNS, adicionar um registro do tipo A (type A) para configurar isso, da seguinte maneira:

```
A   *   IP

```
PS: Entende-se como um novo registro do Tipo A, com valor "*" (wildcard) redirecionando tudo para o "IP" (IP do seu servidor).

### 💭 Reflexão

A separação dos tenants em subdomínios dá a ideia de exclusividade para cada cliente/tenant.

Além disso, já é um ótimo início para a implantação de camadas extras de segurança, como utilização de bancos ou scheemas separados entre clientes, aumentando a segurança dos dados salvos, garantindo também que violações de dados (data breaches) sejam menos danosas (e danosas a menos pessoas/clientes).
