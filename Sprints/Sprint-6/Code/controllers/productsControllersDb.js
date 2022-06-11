/*
const db = require('../database/models');
const sequelize = db.sequelize;



const productsControllersDb = {
    productsList: (req, res) => {
        db.Product.findAll()
            .then(productos => {
                res.render('productList.ejs', {productos})//productos está en la vista
            })
    },
    
    detalleProduct: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(productos => {
                res.render('productDetail.ejs', {productos});
            });
    },

    createProduct: (req, res) => {
        db.Product.findAll({
          //
        })
            .then(productos => {
                res.render('newProduct', {productos});
            });
    },

        recordProduct: (req, res) => {
       
        db.Product.create({ 

            id: req.params.id,
            tipo: req.body.tipo,
            material: req.body.material,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            imagen: path.join('/images-multer/', req.file.filename)
        })
           
                   .then(resultado => {
                        res.redirect('/products');
                     })
        
     }  ,

     editProduct: function(req, res) {
        Product.findByPk(req.params.id)
        .then((Product) => {
        res.render('editProduct', {Product : Product}) } )
    },
    

    putProduct: function (req,res) {
        db.Product.update({ 

            id: req.params.id,
            tipo: req.body.tipo,
            material: req.body.material,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            imagen: path.join('/images-multer/', req.file.filename)
        },
        {
            where : { id : req.params.id}  
           }
        )
           
                   .then(resultado => {
                        res.redirect("/");
                     })
          
    },

  
    
        deleteProduct: function (req, res) {
        db.Product.destroy({where: {id: req.params.id }})
        .then(() => {
                  res.redirect('/products');
               })
         }
    }



module.exports = productsControllersDb;

*/