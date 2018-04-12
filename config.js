const Sequelize = require('sequelize');

module.exports = {
  development: {
    username: 'process.env.RDS_USERNAME',
    password: 'process.env.RDS_PASSWORD',
    database: 'process.env.RDS_DB_NAME',
    host: 'process.env.RDS_HOSTNAME',
    port: process.env.RDS_PORT,
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op,
  },
  production: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op,
  },
  session: {
    secret: process.env.RDS_SECRET || 'placeholdersecret',
    operatorsAliases: Sequelize.Op,
  },
};
