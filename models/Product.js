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
      type: DataTypes.INTEGER, // INT
      allowNull: false, // Doesnt allow Null values
      defaultValue: 10, // Sets the default to 10
      isNumeric: true, // Validates that the value is numeric
    },

    // Field #5
    category_id: {
      type: DataTypes.INTEGER, // INT
      references: {
        model: 'category', // selects the table/model called table
        key: 'id', // making the category_id -> the id in the category table/model
        unique: true, // makes the category_id required
      }
    }
  },

  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    // Assigning the name for our table 'product'
    modelName: 'product',
  }
);

module.exports = Product;
