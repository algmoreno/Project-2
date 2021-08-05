const { Product } = require('../models');

const productData = [
  {
    product_name: 'Samsung 65-Inch 4K Smart TV',
    price: 2099.99,
    stock: 40,
    category_id: 1,
  },
  {
    product_name: 'LG 48-Inch 4K Smart OLED TV',
    price: 299.99,
    stock: 51,
    category_id: 1,
  },
  {
    product_name: '2020 Apple Mac Mini with Apple M1 Chip',
    price: 699.00,
    stock: 222,
    category_id: 1,
  },
  {
    product_name: 'Lenovo IdeaCentre Computer',
    price: 549.99,
    stock: 81,
    category_id: 1,
  },
  {
    product_name: 'HP Chromebook 14 Laptop',
    price: 225.00,
    stock: 59,
    category_id: 1,
  },
  {
    product_name: 'Outliers - Malcom Gladwell',
    price: 14.76,
    stock: 16,
    category_id: 2,
  },
  {
    product_name: 'Deep Work - Cal Newport',
    price: 16.99,
    stock: 12,
    category_id: 2,
  },
  {
    product_name: 'Zero Dark Thirty - Samuel Brantley',
    price: 11.49,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: 'Sapiens - Yuval Noah Harari',
    price: 14.99,
    stock: 39,
    category_id: 2,
  },
  {
    product_name: 'Siddartha - Herman Hesse',
    price: 19.99,
    stock: 33,
    category_id: 2,
  },
  {
    product_name: 'Thriller - Michael Jackson (Vynl)',
    price: 54.00,
    stock: 24,
    category_id: 3,
  },
  {
    product_name: "Sgt. Pepper's Lonely Hearts Club Band - The Beatles (Vynl)",
    price: 49.99,
    stock: 14,
    category_id: 3,
  },
  {
    product_name: 'Californication - Red Hot Chili Peppers (CD)',
    price: 19.99,
    stock: 19,
    category_id: 3,
  },
  {
    product_name: 'Black On Both Sides - Mos Def (CD)',
    price: 14.79,
    stock: 11,
    category_id: 3,
  },
  {
    product_name: 'Blonde - Frank Ocean (CD)',
    price: 12.00,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'Autumn Leaves - Bill Evans Trio (Vynl)',
    price: 35.49,
    stock: 8,
    category_id: 3,
  },
  {
    product_name: "Sportswear Men's Just Do It Swoosh Tee",
    price: 24.99,
    stock: 22,
    category_id: 4,
  },
  {
    product_name: "Women's Legend Short Sleeve Shirt",
    price: 26.79,
    stock: 18,
    category_id: 4,
  },
  {
    product_name: "U ERA Sneakers Pewter/True White",
    price: 69.90,
    stock: 8,
    category_id: 4,
  },
  {
    product_name: "Women's Swift Essential Sneaker",
    price: 24.99,
    stock: 8,
    category_id: 4,
  },
  {
    product_name: "Jurassic Park (Blu-Ray",
    price: 15.75,
    stock: 9,
    category_id: 5,
  },
  {
    product_name: "Goodfellas",
    price: 14.19,
    stock: 15,
    category_id: 5,
  },
  {
    product_name: "Parasite (Blu-Ray)",
    price: 15.79,
    stock: 8,
    category_id: 5,
  },
  {
    product_name: "Inception",
    price: 16.79,
    stock: 16,
    category_id: 5,
  },
  {
    product_name: "Billy Madison",
    price: 15.79,
    stock: 11,
    category_id: 5,
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

