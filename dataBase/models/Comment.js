'use strict';

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_name: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Date.now()
            },
        },
        {
            tableName: 'comments',
            timestamps: false
        });

    return Comment
};
