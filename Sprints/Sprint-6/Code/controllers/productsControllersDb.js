
const db = require('../database-db/models');
const sequelize = db.sequelize;



const productsControllersDb = {
    productsList: (req, res) => {
        db.Product.findAll()
            .then(productos => {
                res.json(productos)//productos está en la vista
            })
    },
    
    detalleProduct: (req, res) => {
        db.Product.findByPk(req.params.idProduct)
            .then(productos => {
                res.json(productos);
            });
    },

    createProduct: (req, res) => {
        db.Product.findAll({
          //
        })
            .then(productos => {
                res.json('newProduct', {productos});
            });
    },

        recordProduct: (req, res) => {
       
        db.Product.create({ 

            // id: req.params.id,
            tipo: req.body.tipo,
            material: req.body.material,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            // imagen: path.join('/images-multer/', req.file.filename)
        })
           
                   .then(resultado => {
                        res.json(resultado);
                     })
        
     }  ,

     editProduct: function(req, res) {
        Product.findByPk(req.params.id)
        .then((Product) => {
        res.render('editProduct', {Product : Product}) } )
    },
    

    putProduct: function (req,res) {
        db.Product.update({ 
            tipo: req.body.tipo,
            material: req.body.material,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            // imagen: path.join('/images-multer/', req.file.filename)
        },
        {
            where : { id_products: req.params.idProduct}  
           }
        )
           
                   .then(resultado => {
                        res.redirect("/");
                     })
          
    },

  
    
        deleteProduct: function (req, res) {
        db.Product.destroy({where: {id_products: req.params.idProduct }})
        .then(() => {
                  res.redirect('/products');
               })
         }
    }



module.exports = productsControllersDb;

