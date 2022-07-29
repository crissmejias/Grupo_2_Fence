//modelo de Rol. //






module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id_rol: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        rol: {
            type: dataTypes.STRING(400)
        }
    
    }
    let config = {
        tableName: 'rol',
        timestamps: false
    };
    const Rol = sequelize.define(alias, cols, config)

    return Rol
}

