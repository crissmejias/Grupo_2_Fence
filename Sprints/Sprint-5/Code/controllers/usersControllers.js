const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');// para poder implementar validación en el CRUd de usuarios
const fs = require('fs');
