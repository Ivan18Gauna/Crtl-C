const { DataTypes, INTEGER, STRING, FLOAT, BOOLEAN } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('category', {
     id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
     },
     category:{
        type: DataTypes.STRING,
        allowNull: false
     }
  },
  {
   createdAt: false,
      updatedAt: false,
      deletedAt: "borrado",
      paranoid: true,
      timestamps: true,
  });
};