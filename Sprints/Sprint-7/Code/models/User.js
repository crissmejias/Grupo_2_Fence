const fs = require('fs');

const User = {
	fileName: './database/users.json',

// parsear el JSON
	getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

// renerar nuevo ID	- en el JSON los ID son numbers
	generateId: function () {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
	},

// devuelve array de todos los usuarios	
	findAll: function () {
		return this.getData();
	},

// devuelve un usuario por ID colocado como argumento de la función
	findByPk: function (id) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser.id === id);
		return userFound;
	},

// devuelve un usuario según el contenido del campo que seleccionemos
	findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},

// crea un nuevo usuario con nuevo ID, en base a los
// datos q se informen en la función
// se deben colocar los atributos y valores como argumento (userData), EXCEPTO EL ID
	create: function (userData) {
		let allUsers = this.findAll();
		let newUser = {
			id: this.generateId(),
			...userData
		}
		allUsers.push(newUser);
		fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null,  ' '));
		return newUser;
	},

// elimina el elemento según ID - devuelve true si se eliminó correctamente
    delete: function (id) {
		let allUsers = this.findAll();
		let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
		fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
		return true;
	}
}

module.exports = User;