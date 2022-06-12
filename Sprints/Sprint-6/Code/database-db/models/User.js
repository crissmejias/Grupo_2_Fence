//modelo de Usuarios. //User//






module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id_users: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombre: {
            type: dataTypes.STRING(400)
        },
        apellido: {
            type: dataTypes.STRING(400)
        },
        email: {
            type: dataTypes.STRING(400)
        },
        password: {
            type: dataTypes.STRING(400)
        },
        categoria: {
            type: dataTypes.TEXT
        },

    //    imagen: {
    //         type: dataTypes.TEXT
    //    }
    }
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)

    return User
}

