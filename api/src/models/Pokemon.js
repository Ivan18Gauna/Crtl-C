const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
     id:{
       type:DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       primaryKey:true
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    hp:{
      type:DataTypes.INTEGER,
      allowNull: true
      
    },
    attack:{
      type:DataTypes.INTEGER,
      allowNull: true
      
    },
    defense:{
      type:DataTypes.INTEGER,
      allowNull: true
      
    },
    speed:{
      type:DataTypes.INTEGER,
      allowNull: true
      
    },
    heigth:{
      type:DataTypes.INTEGER,
      allowNull: true      
    },
    weigth:{
      type:DataTypes.INTEGER,
      allowNull: true
      
    }
  });
};
