const path = require("path");
const fs = require("fs");
const pathToProducts = path.join(__dirname, "../database/products.json");
const productsList = fs.readFileSync(pathToProducts);
const productos = JSON.parse(productsList);

const productsControllers = {
  productsList: (req, res) => {
    res.render("productList", { productos: productos });
  },
  createProduct: (req, res) => {
    res.render("newProduct");
  },
  detalleProduct: (req, res) => {
    let id = req.params.idProduct;
    let productoSeleccionado = productos.find((el) => el.id === id);
    console.log(productoSeleccionado);
    res.render("productDetail", { producto: productoSeleccionado, productos : productos });
  },
  recordProduct: (req,res)=>{
    let newProduct = req.body;
    newProduct.id = productos.length +1;
    productos.push(newProduct);
    console.log(productos);
    let newData = JSON.stringify(productos);
    fs.writeFileSync(pathToProducts,newData);
    res.redirect('/products')
  }
};

module.exports = productsControllers;
