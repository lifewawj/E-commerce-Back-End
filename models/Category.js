const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

// set up fields and rules for Category model/table
Category.init(
  // define columns/fields
  // Field #1
  {
    id: {
      type: DataTypes.INTEGER, // INT
      primaryKey: true, // sets the Id to be the Primary Key
      allowNull: false, // Doesnt allow null values
      autoIncrement: true, // Auto Increments each row (category) in the category table (1, 2, 3, etc).
    }
  },

  // Field #2
  {
    category_name: {
      type: DataTypes.STRING, // STRING
      allowNull: false,
    }
  },

  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    // Assigning the name for our table 'category'
    modelName: 'category',
  }
);

module.exports = Category;
