
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
            allowNull: true,
            

        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        guid: {
            type: DataTypes.UUID,
            allowNull: false,
        
            
            
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

    },

    );
    return Note;
};


