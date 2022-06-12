//modelo de pivot. //






module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_User';
    let cols = {
        id_products_users: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
       
    
    }
    let config = {
        tableName: 'products_users',
        timestamps: false
    };
    const Product_User = sequelize.define(alias, cols, config)

    return Product_User
}

