
require('dotenv').config()

module.exports = {
    server:{
        port: process.env.PORT,
    },
    database:{
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: process.env.DB_DIALECT
    },
    services: {
        product:{
            host: process.env.PRODUCT_SERVICE_HOST
        }
    }
  };
  