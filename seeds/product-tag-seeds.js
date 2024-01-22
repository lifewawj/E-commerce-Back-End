// Requires the ProductTag db Table from the models folder
const { ProductTag } = require('../models');

// Stores product tag data inside a const variable called productTagData, within an array with multiple product_id(s), and its tag_id(s)
const productTagData = [
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

// Inside a function named seedProductTags, it Creates multiple productTag(s) and stores it inside the ProductTag db Table
const seedProductTags = () => ProductTag.bulkCreate(productTagData);

// Exports the seedProductTags
module.exports = seedProductTags;
