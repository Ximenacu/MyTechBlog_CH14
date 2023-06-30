const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}


Comments.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        contentt: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        post_id:{
            type: DataTypes.INTEGER,
            references: {
              model: 'posts',
              key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
        },
    },
    {
        hooks: {
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    }
)

module.exports = Comments;