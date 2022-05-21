const express = require("express");
const { homedir } = require("os");
const { dirname } = require("path");
const path = require("path");
const productRouter = require("./routes/products");
// /*sprint 4
const methodOverride = require('method-override'); //Para  habilitar peticion http PUT y DELETE

const router = require("./routes/main");
const app = express();
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); //Para  habilitar peticion http PUT y DELETE


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

