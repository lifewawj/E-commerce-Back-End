const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  // define columns
  {
    // Field #1
    id: {
      type: DataTypes.INTEGER, // INT
      allowNull: false, // Doesnt allow Null value
      primaryKey: true, // Sets the id as your Primary Key
      autoIncrement: true, // Auto Increments 
    },

    // Field #2
    product_id: {
      type: DataTypes.INTEGER, // INT
      references: {
        model: 'product', // selects the product table/model
        key: 'id', // making the product_id -> the id from the product table/model
        unique: false, // makes product_id required
      }
    },
  },

  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    // Assigning the name for our table 'product_tag'
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
