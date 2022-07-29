//modelo de Tipo de Material. //






module.exports = (sequelize, dataTypes) => {
    let alias = 'Tipo_Material';
    let cols = {
        id_material: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        tipo_material: {
            type: dataTypes.STRING(400)
        }
    
    }
    let config = {
        tableName: 'tipo_material',
        timestamps: false
    };
    const Tipo_Material = sequelize.define(alias, cols, config)

    return Tipo_Material
}

