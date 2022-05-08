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
    let newData = JSON.stringify(productos,null,2);
    fs.writeFileSync(pathToProducts,newData);
    res.redirect('/products')
  },

  editProduct: (req,res) => {

    let id = req.params.idProduct;

    const productoSeleccionado = productos.find((el) => el.id === parseInt(id))

    res.render('editProduct',{producto:productoSeleccionado  })
},
putProduct : (req,res) => {

  const idProduct = req.params.idProduct;
  const tipo = req.body.tipo;
  const  nombre= req.body.nombre;
  const material = req.body.material;
  const precio = req.body.precio;
  const descripcion = req.body.descripcion;
  const imagen = req.body.imagen;

  productos.forEach(element => {
      if(element.id === parseInt(idProduct)){
          element.tipo = tipo;
          element.nombre = nombre;
          element.material = material;
          element.precio = precio;
          element.descripcion = descripcion;
          element.imagen = imagen;
      }
    });

    const newData = JSON.stringify(productos,null,2);

    fs.writeFileSync(pathToProducts,newData);


    res.redirect("/")
}
};

module.exports = productsControllers;
