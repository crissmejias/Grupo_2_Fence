//modelo de Productos. //Product//
const Tipo_Articulo = require("./Tipo_Articulo");
module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    id_products: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_categoria: {
      type: dataTypes.INTEGER,
    },
    nombre: {
      type: dataTypes.STRING(400),
    },
    precio: {
      type: dataTypes.INTEGER,
    },
    descripcion: {
      type: dataTypes.TEXT,
    },
    imagen: {
      type: dataTypes.TEXT,
    },
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  return Product;
};
