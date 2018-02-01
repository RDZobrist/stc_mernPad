const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define("User", {
            emailAddress: {
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    isEmail: {
                        msg: 'This is not an email address'
                    }
                }

            },
            username: {
                type: DataTypes.STRING,
                allowNull: true


            },
            password: {
                type: DataTypes.STRING,
                allowNull: true

            },
            guid: {
                type: DataTypes.UUID,
                allowNull: false

            }
        },

    );

    User.associate = function (models) {
        // Associating User with Notes
        User.hasMany(models.Note, {
            onDelete: "cascade" //when a User is deleted, deleta all associated Notes
        });
    };

    return User;
};