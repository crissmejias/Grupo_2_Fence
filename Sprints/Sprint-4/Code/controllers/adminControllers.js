const path = require('path');
const fs = require('fs');




 const adminControllers= {
    index: (req,res) =>{
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        res.render(path.resolve(__dirname, '../views/productList'), {products});
    },
    create: (req,res) =>{
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        res.render(path.resolve(__dirname, '../views/administradores/create'));
    },
    save: (req,res) =>{
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        let ultimaValla = products.pop();
        products.push(ultimaValla);
        console.log();
        let nuevoProducto = {
            id: ultimaValla.id +1,
            tipo : req.body.tipo,
            material: req.body.material,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            imagen: req.file.filename
        }

        products.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(products,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../database/products.json'), nuevoProductoGuardar);
        res.redirect('/productList');
    },
    show: (req,res) =>{
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        let valla;
        products.forEach(vallas => {
            if(vallas.id == req.params.id){
                valla = vallas;
            }
        });
        res.render(path.resolve(__dirname, '../views/products/productDetail'), {valla})

    },
    edit: (req,res)=>{
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        const vallasId = req.params.id;
        let vallaEditar = products.find(valla=> valla.id == vallasId);
        res.render(path.resolve(__dirname,'../views/administradores/edit'), {vallaEditar});
    },
    update: (req,res) =>{
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.any;
        let vallasUpdate = products.map(valla =>{
            if(valla.id == req.body.id){
                return valla = req.body;
            }
            return valla;
        })
        let vallaActualizar = JSON.stringify(vallasUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../database/products.json'),vallaActualizar)
        res.redirect('/productList');
    },
    delete: (req,res) =>{
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        const vallaDeleteId = req.params.id;
        const vallasStockFinal = products.filter(valla => valla.id != vallaDeleteId);
        let vallasGuardar = JSON.stringify(vallasStockFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../database/products.json'),vallasGuardar);
        res.redirect('/productDetail');
    }




}


module.exports = adminControllers;