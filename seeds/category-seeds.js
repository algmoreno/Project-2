const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Books',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Clothes',
  },
  {
    category_name: 'Movies',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

