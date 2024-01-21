// import important parts of sequelize library
const { Model, DataTypes, ForeignKeyConstraintError } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model/table
Product.init(
  // define columns
  {
    // Field #1
    id: {
      type: DataTypes.INTEGER, // INT
      allowNull: false, // Doesnt allow null values
      primaryKey: true, // Sets the id as the Primary Key
      autoIncrement: true, // Auto Increments row (product) in the Product Table
    },

    // Field #2
    product_name: {
      type: DataTypes.STRING, // STRING
      allowNull: false, // Doesnt allow Null values
    },

    // Field #3
    price: {
      type: DataTypes.FLOAT, // Decimal Number
      allowNull: false, // Doesnt allow Null values
      isFloat: true, // Validates that the value is a decimal
    },

    // Field #4
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      isNumeric: true,
    },

    // Field #5
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
        unique: false,
      }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
