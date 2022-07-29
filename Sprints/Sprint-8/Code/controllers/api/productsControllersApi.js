
const db = require('../../database-db/models');
const sequelize = db.sequelize;
const path = require('path');


const productsControllersApi = {
    productsList: (req, res) => {
        db.Product.findAll()
            .then(products => {
                let respuesta = {
				meta:{status:200,
				total: products.length,
				url:'api/products'},
				data : products
			};
			res.json(respuesta)
            })
    },
    

// SPRINT 8-API///
detalleProduct: (req, res) => {
        db.Product.findByPk(req.params.idProduct,
         
            )
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: "api/products/:idProduct"
                    },
                    data: products
                }
                res.json(respuesta);
            });
           
    },

//

	
	
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
            tipo: req.body.tipo,
            material: req.body.material,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            imagen: path.join('/images-multer/', req.file.filename)
        })
           
                   .then(resultado => {
                        res.redirect('/products')
                     })
        
     }  ,

     editProduct: function(req, res) {
        db.Product.findByPk(req.params.idProduct)
        .then((product) => {
        res.render('editProduct', {product}) } )
    },
    

    putProduct: function (req,res) {
        db.Product.update({ 
            tipo: req.body.tipo,
            material: req.body.material,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            imagen: path.join('/images-multer/', req.file.filename)
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



module.exports = productsControllersApi;

