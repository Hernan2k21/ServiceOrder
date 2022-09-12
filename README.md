# Node js Orders service

  

# Environment vars

This project uses the following environment variables:

  

| Name | Description | Default Value |

| ----------------------------- | ------------------------------------| -----------------------------------------------|

|PORT | App listening port | 8081 |

|DB_USERNAME| Mysql database username |root

|DB_PASSWORD|Mysql database password|root

|DB_HOST|Mysql database host| localhost

|DB_PORT|Mysql database port| 3308
|DB_NAME|Mysql database name| orders
|DB_DIALECT| Sequelize dialect config| mysql
|PRODUCT_SERVICE_HOST|host of product microservice| localhost:8086
  

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 16.16

  
  

# Getting started

- Clone the repository

```

git clone https://github.com/Hernan2k21/ServiceOrder.git

```

- Install dependencies

```

cd ServiceOrder

npm install

```

- Run the project

```

npm run dev

```

  

## Project Structure

The folder structure of this app is explained below:

  

| Name | Description |

| ------------------------ | --------------------------------------------------------------------------------------------- |

| **config** | Application configuration file including environment configs |

| **node_modules** | Contains all npm dependencies

| **src/Actions** | Contains reusable actions

| **src/Controllers** | Contains express route controllers

| **src/Database** | Contains database resources

| **src/Enums** | Contains useful constants

| **src/Helpers** | Contains Helper functions

| **src/Middlewares** | Express middlewares which process the incoming requests before handling them down to the routes

| **src/Responses** | Contains http responses |

| **src/Routes** | Contain all express routes, separated by module/area of application

| **src/Tests** | Contains test resources

| **src/Validations** | Request schema validations and business logic validations

| index.js | Entry point to express app

| package.json | Contains npm dependencies