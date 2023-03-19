const { DataTypes, INTEGER, STRING, FLOAT, BOOLEAN } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('products', {
     id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
     },
     imagen: {
      type: DataTypes.STRING,
      allowNull: false
     },
     nombre:{
      type: DataTypes.STRING,
      allowNull: false
     },
     precio: {
      type: DataTypes.FLOAT,
      allowNull: false
     },
     stock:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
     }
  });
};
