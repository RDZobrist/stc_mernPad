
const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    let Note = sequelize.define("Note", {
    
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            default: Date.now(),
            validate: {
                isDate: true
            }
        },

        updatedAt: {
            type: DataTypes.DATE,
            default: Date.now(),
            validate: {
                isDate: true
            }
        }

    });

    // Note.associate = function (models) {
    //     // saying a Note should belong to a User
    //     Note.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Note;
};


