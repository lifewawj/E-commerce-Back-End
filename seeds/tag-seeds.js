// Retrieves the Tag db Table from the models folder
const { Tag } = require('../models');

// Stores the tag data within a const variable
// Inside is an array with all the tag_name(s)
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// Inside a function named seedTags, it Creates multiple tags and stores it within the Tag db Table/Model
const seedTags = () => Tag.bulkCreate(tagData);

// Exports the seedTags
module.exports = seedTags;
