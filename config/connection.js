require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  
  : new Sequelize(
    // Access the .env SECRET file and grabs the variable named DB_NAME
    process.env.DB_NAME, 
    // Access the .env SECRET file and grabs the variable named DB_NAME
    process.env.DB_USER, 
    // Access the .env SECRET file and grabs the variable named DB_PASSWORD
    process.env.DB_PASSWORD, {
      // Database location
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
