const db = require("../database-db/models");
const sequelize = db.sequelize;
const path = require("path");
const Tipo_Articulo = require("../database-db/models/Tipo_Articulo");

const productsControllersDb = {
  productsList: (req, res) => {
    db.Product.findAll().then((productos) => {
      res.render("productList", { productos }); //productos está en la vista
    });
  },

  detalleProduct: (req, res) => {
    const { idProduct } = req.params;
    db.Product.findOne({
      where: { id_product: idProduct },
      include: [
        {
          association: "categoria",
        },
      ],
    }).then((productos) => {
      res.render("productDetail", { productos });
    });
  },

  createProduct: (req, res) => {
    db.Product.findAll({
      //
    }).then((productos) => {
      res.render("newProduct", { productos });
    });
  },

  recordProduct: (req, res) => {
    db.Product.create({
      tipo: req.body.tipo,
      material: req.body.material,
      nombre: req.body.nombre,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      imagen: path.join("/images-multer/", req.file.filename),
    }).then((resultado) => {
      res.redirect("/products");
    });
  },

  editProduct: function (req, res) {
    db.Product.findByPk(req.params.idProduct).then((product) => {
      res.render("editProduct", { product });
    });
  },

  putProduct: function (req, res) {
    db.Product.update(
      {
        tipo: req.body.tipo,
        material: req.body.material,
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        imagen: path.join("/images-multer/", req.file.filename),
      },
      {
        where: { id_products: req.params.idProduct },
      }
    ).then((resultado) => {
      res.redirect("/");
    });
  },

  deleteProduct: function (req, res) {
    db.Product.destroy({ where: { id_products: req.params.idProduct } }).then(
      () => {
        res.redirect("/products");
      }
    );
  },
};

module.exports = productsControllersDb;
