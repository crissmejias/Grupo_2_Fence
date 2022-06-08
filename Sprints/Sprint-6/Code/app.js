const express = require("express");
const { homedir } = require("os");
const { dirname } = require("path");
const path = require("path");
const productRouter = require("./routes/products");
// /*sprint 4
const usersRouter=require ("./routes/users");//requerir ruta
const methodOverride = require('method-override'); //Para  habilitar peticion http PUT y DELETE

//sprint 6

//const productsDbRouter =  require("./routes/productsDb");


const app = express();
const session = require('express-session'); // para poder utilizar Session como pide el Sprint 5
const cookies = require('cookie-parser'); // para el reqeurimiento opcional del Srint 5
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware'); // VER PARA Q ES
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.set("view engine", "ejs"); // Template Engine


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); //Para  habilitar peticion http PUT y DELETE
app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
})); //para implementar Session según requerimiento de Sprint 5
app.use(cookies());
app.use(userLoggedMiddleware);
app.set("views", [
  path.join(__dirname, "views/products"),
  path.join(__dirname, "views/users"),
  path.join(__dirname, "views/"),
]);
app.listen(process.env.PORT || 3000, () =>
  console.log("Levantando un servidor con Express")
);
const rutaMain = require("./routes/main");
app.use("/", rutaMain);
app.use("/products", productRouter);
app.use("/users",usersRouter); //Endpoint apuntando a la ruta de usuarios - Sprint 5
// sprint 6
//app.use("/products", productsDbRouter);
