const { DataTypes } = require('sequelize')

const db = require('../utils/database')


const Products = db.define('products', {
    
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1, 255]
        }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
              isNumeric: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
            isNumeric: true
        }
    }
})



module.exports = Products

