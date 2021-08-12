const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Music',
  },
  {
    category_name: 'Movies',
  },
  {
    category_name: 'TV',
  },
  {
    category_name: 'Video Games',
  },
  {
    category_name: 'Books',
  },
  {
    category_name: 'Cooking',
  },
  {
    category_name: 'Gardening',
  },
  {
    category_name: 'Interior Design',
  },
  {
    category_name: 'Fashion',
  },
  {
    category_name: 'Travel/Vacation',
  },
  {
    category_name: 'Restaurants',
  },
  {
    category_name: 'Social',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

seedCategories();

