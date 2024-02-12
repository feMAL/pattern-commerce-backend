<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Glosary

- [📝 Requerimientos básicos](#basic-requirements)
- [🛠️ Instalar dependencias](#install-dependencies)
- [⚙️ Configuración](#configurations)
- [💻 Run And Tests](#running)
- [📚 Swagger](#swagger-info)
- [💾 Database](#db-info)
- [🐳 Docker](#docker-info)

<a name="basic-requirements"></a>

## 📝 Requerimientos básicos

- Node.js v18.13.0 or higher ([Download](https://nodejs.org/es/download/))
- YARN v1.22.19 or higher
- NPM v8.19.3 or higher
- NestJS v9.1.9 or higher ([Documentación](https://nestjs.com/))

<a name="install-dependencies"></a>

## Installation

```bash
$ yarn install
```

```bash
$ npm install
```

<a name="configurations"></a>
## ⚙️ Configuración

This starter comes with **.env.example** and **.env.test**, this file keeps basic configurations to works the app.

To run in local context you will need thi **.env.dev** file, you can generate this using the example file. 

```sh
# SERVER 
APP_ENV=dev
APP_NAME=semilla
APP_HOST=localhost
APP_PORT=3000
APP_CONTEXT=v1
APP_ORIGINS=http://localhost:3000,http://localhost:8080,http://localhost:8081
APP_ALLOWED_HEADERS=Content-Type,Authorization,Set-Cookie,Access-Control-Allow-Origin,Cache-Control,Pragma
APP_ALLOWED_METHODS=GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS
APP_CORS_ENABLED=true

#SWAGGER
APP_SWAGGER_ENABLED=true
APP_SWAGGER_PATH=docs

#
JWT_SECRET=ClaveSecreta
JWT_KEY_EXP=1d

# DATABASE MONGO
DB_MONGO_ENABLED=false

# DATABASE SQL
DB_SQL_ENABLED=false


# EXTERNAL SERVICES
#SRV_MAIL=http://localhost:3030/mail/send
#SRV_MAIL_APIKEY=APIKEY-MAIL-SERVER-123456


NODE_ENV=dev
```

<!--details>
<summary>💬 Para ver en detalle todas las propiedades de la configuración, hace click acá.</summary-->

<a name="running"></a>
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

<a name="swagger-info"></a>

## 📚 Swagger

The starter has **Swagger** (OpenAPI 3.0.0).

For more documentation [NestJS OpenApi](https://docs.nestjs.com/openapi/introduction)

This section can be available with the follow env variables in **.env** file.

```sh
APP_SWAGGER_PATH=docs
APP_SWAGGER_ENABLED=true
```

#### URL

Documentation access URL: `http://localhost:8080/v1/docs`

#### Scheme

```
<http|https>://<server_url><:port>/<app-context>/<swagger-path>
```

#### Exportar el swagger en JSON

Se puede exportar la documentación a un **JSON** agregando el sufijo **-json** al path definido.

- Default: `http://localhost:8080/v1/docs-json`
- Schema: `<http|https>://<server_url><:port>/<app-context>/<swagger-path>-json`


<a name="db-info"></a>

## 💾 Data Base

This project can use Sql Data Base provided by TypeOrm or can use Non SQL, with mongoose.

### Using SQL module.

To use SQL database you have to available by environemnt variables. To do this, add the folowing variables in **.env** file

```sh
DB_SQL_ENABLED=true
DB_SQL_HOSTNAME=localhost
DB_SQL_USER=root
DB_SQL_PASSWD=root
DB_SQL_PORT=3306
DB_SQL_NAME=test
```

### Using Mongoose Module
To use Mongo database you have to available by environemnt variables. To do this, add the folowing variables in **.env** file

```sh
DB_MONGO_ENABLED=false
DB_MONGO_HOSTNAME=localhost
DB_MONGO_PORT=27017
DB_MONGO_NAME=nest_authorization
```

<a name="docker-info"></a>

## 🐳 Docker

This project have dockerfile and docker-compose.yml ready to use.

### Docker Build
Schema: docker build . -t <user-docker>/<app-name>

### Docker Compose
Schema: docker run -d -p 8080:8080 --env-file .env <user-docker>/<app-name>

Example

docker-compose -f docker/docker-compose.yml up -d --build

or

docker build -t nestjs-template .
docker run -d -p 8080:8080 --env-file .env nestjs-template

or 

docker build -t nestjs-template .
docker run -it -p 8080:8080 --env-file .env nestjs-template



<a name="support"></a>
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
