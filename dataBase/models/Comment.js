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
                validate: {
                    notEmpty: true,
                    len: {
                        args: [2, 40],
                        msg: 'Name must be from 2 to 40 symbols'
                    }
                }
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: new Date().toISOString()
            },
        },
        {
            tableName: 'comments',
            timestamps: false
        });

    return Comment
};
