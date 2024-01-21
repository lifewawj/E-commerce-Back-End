const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  // define columns
  {
    // Field #1
    id: {
      type: DataTypes.INTEGER, // INT
      allowNull: false, // Doesnt allow a Null value
      primaryKey: true, // Sets id as the Primary Key
      autoIncrement: true, // Auto Increments
    },

    // Field #2
    tag_name: {
      type: DataTypes.STRING, // STRING
    }
  },

  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    // Assigning the name for our table 'tag'
    modelName: 'tag',
  }
);

module.exports = Tag;
