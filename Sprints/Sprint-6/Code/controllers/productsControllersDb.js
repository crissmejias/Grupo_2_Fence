/*
const db = require('../database/models');
const sequelize = db.sequelize;



const productsControllersDb = {

    
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