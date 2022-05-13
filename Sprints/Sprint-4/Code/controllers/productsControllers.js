const path = require("path");
const fs = require("fs");
const { parse } = require("path");
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
   newProduct.id = (productos.length +1); //para homogeneizar los id
 
 /*prueba subida archivos
  let newProduct = {
    id: productos.length +1,
    tipo : req.body.tipo,
    material: req.body.material,
    nombre: req.body.nombre,
    precio: req.body.precio,
    descripcion: req.body.descripcion,
    imagen: req.file.imagen
}
    */
    productos.push(newProduct);
    console.log(productos);
    let newData = JSON.stringify(productos,null,2);
    fs.writeFileSync(pathToProducts,newData);
    res.redirect('/products')
  },

  editProduct: (req,res) => {

    let id = req.params.idProduct;

    let productoSeleccionado = productos.find((el) => el.id == id);

    res.render('editProduct',{producto:productoSeleccionado,productos:productos})
},
putProduct : (req,res) => {
console.log(productos);
  const idProduct = req.params.idProduct;
  const tipo = req.body.tipo;
  const  nombre= req.body.nombre;
  const material = req.body.material;
  const precio = req.body.precio;
  const descripcion = req.body.descripcion;
  const imagen = req.file.imagen;
  //se cambió el body por el file en const imagen//
  
// console.log(req.params);
//   console.log(req.body);

  productos.forEach(element => {
      if(element.id == parseInt(idProduct)){
          element.tipo = tipo;
          element.nombre = nombre;
          element.material = material;
          element.precio = precio;
          element.descripcion = descripcion;
          element.imagen = imagen;
      }
    });

    const newData = JSON.stringify(productos,null,2);
    // console.log(parseInt(idProduct));
    // console.log (newData);

    fs.writeFileSync(pathToProducts,newData);


    res.redirect("/")
},
deleteProduct: (req,res)=>{
    let idProduct = parseInt(req.params.idProduct);
   
   nuevaLista = productos.filter( el  => el.id !== idProduct);
      
    let nuevosProductos = JSON.stringify(nuevaLista,null,2);
    console.log('Funcionando el controlador');
    console.log(nuevosProductos);
   fs.writeFileSync(pathToProducts,nuevosProductos); 

  res.redirect('/products')
}
};

module.exports = productsControllers;
