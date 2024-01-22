// Retrives the Category data table inside of the models folder
const { Category } = require('../models');

// Stores the category data within a const variable called categoryData
const categoryData = [
  // Seeds placed into the table
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Inside a function named seedCategories, it Creates multiple category(s) and stores it inside of the Category db Table
const seedCategories = () => Category.bulkCreate(categoryData);

// Exports the seedCategories
module.exports = seedCategories;
