//modelo de Tipo de Articulo. //






module.exports = (sequelize, dataTypes) => {
    let alias = 'Tipo_Articulo';
    let cols = {
        id_tipo: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        tipo: {
            type: dataTypes.STRING(400)
        }
    
    }
    let config = {
        tableName: 'tipo_articulo',
        timestamps: false
    };
    const Tipo_Articulo = sequelize.define(alias, cols, config)

    return Tipo_Articulo
}

