//modelo de Productos. //Product//






module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: {
            type: dataTypes.STRING
        },
        material: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING(400)
        },
        precio: {
            type: dataTypes.INTEGER
        },
        descripcion: {
            type: dataTypes.TEXT
        },
       /* imagen: {
            type: dataTypes.
        }*/
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)

    return Product
}

