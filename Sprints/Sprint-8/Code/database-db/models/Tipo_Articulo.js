//modelo de Tipo de Articulo. //
const Product = require("./Product");

module.exports = (sequelize, dataTypes) => {
  let alias = "Tipo_Articulo";
  let cols = {
    id_categoria: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: {
      type: dataTypes.STRING(400),
    },
  };
  let config = {
    tableName: "categoria",
    timestamps: false,
  };
  const Tipo_Articulo = sequelize.define(alias, cols, config);
  Tipo_Articulo.associate = (models) => {
    Tipo_Articulo.hasMany(models.Product, {
      foreignKey: "id_categoria",
      as: "categoria",
    });
  };
  Product.associate = (models) => {
    Product.belongsTo(models.Tipo_Articulo, {
      foreignKey: "id_categoria",
      as: "categoria",
    });
  };
  return Tipo_Articulo;
};
