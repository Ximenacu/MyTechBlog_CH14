const Users = require('./users');
const Posts = require('./posts');
const Comments = require('./comments')

module.exports = { Users,Posts, Comments};

// Users.hasMany(Posts, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// Users.hasMany(Comments, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// Posts.hasMany(Comments, {
//     foreignKey: 'post_id', 
//     onDelete: 'CASCADE',
// })

Posts.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Posts, { foreignKey: 'user_id' });
Comments.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Comments, { foreignKey: 'user_id' });
Comments.belongsTo(Posts, { foreignKey: 'post_id', onDelete: 'CASCADE', });
Posts.hasMany(Comments, { foreignKey: 'post_id', onDelete: 'CASCADE', });