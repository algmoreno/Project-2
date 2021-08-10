const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Category = require('./Category');

User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Category.belongsTo(Post, {
  foreignKey: 'category_id'
});

Post.hasOne(Category, {
  foreignKey: 'category_id'
})

User.belongsToMany(Post, {
  through: Comment,
  //as: 'voted_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Comment,
  //as: 'voted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment, Category };