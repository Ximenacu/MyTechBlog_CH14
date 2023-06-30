const sequelize = require('../config/connection');

const {Users,Posts, Comments} = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');
// const reviewData = require('./reviews.json');

// Function to seed db
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const users = await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Posts.bulkCreate(postData, {
    returning: true,
  });

  const comments = await Comments.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

//   const reviews = await Review.bulkCreate(reviewData, {
//     individualHooks: true,
//     returning: true,
//   });

  process.exit(0);
};

seedDatabase();
