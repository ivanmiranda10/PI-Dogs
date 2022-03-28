const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
module.exports = (sequelize) => {
    sequelize.define("temperament", {
        name: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })
}