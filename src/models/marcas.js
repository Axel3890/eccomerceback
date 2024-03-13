const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Marcas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logo_url: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
};
