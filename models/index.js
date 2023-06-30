const Users = require('./users');
const Posts = require('./posts');

module.exports = { Users,Posts};

Users.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});