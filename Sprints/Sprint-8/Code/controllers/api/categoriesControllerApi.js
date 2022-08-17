const db = require("../../database-db/models");
const sequelize = db.sequelize;
const path = require("path");
const { dirname } = require("path");
const pathMulter = path.join(__dirname, "../../public");
const categoriesController = {
  getCategories: (req, res) => {
    db.Tipo_Articulo.findAll().then((result) => {
      res.json(result);
    });
  },
};

module.exports = categoriesController;
