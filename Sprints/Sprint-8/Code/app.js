const express = require("express");
const { homedir } = require("os");
const { dirname } = require("path");
const path = require("path");
const userCookie = require("./middlewares/userCookie");
const productRouter = require("./routes/products");
const categoriesApi = require("./routes/api/categoriesApi");

//sprint 6

//const productRouterDb = require("./routes/productsDb");

// /*sprint 4
const usersRouter = require("./routes/users"); //requerir ruta
const methodOverride = require("method-override"); //Para  habilitar peticion http PUT y DELETE
const productsdb = require("./routes/productsDb");
const app = express();
const session = require("express-session"); // para poder utilizar Session como pide el Sprint 5
const cookieParser = require("cookie-parser"); // para el reqeurimiento opcional del Srint 5
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware"); // VER PARA Q ES
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.set("view engine", "ejs"); // Template Engine

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method")); //Para  habilitar peticion http PUT y DELETE
app.use(
  session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
  })
); //para implementar Session según requerimiento de Sprint 5
app.use(cookieParser());
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
const usersRouterApi = require("./routes/api/usersApi");
const productsRouterApi = require("./routes/api/productsApi");
app.use("/", rutaMain);
app.use("/products", productRouter);
app.use("/productsdb", productsdb);
app.use("/users", usersRouter);
app.use("/api/users", usersRouterApi);
app.use("/api/products", productsRouterApi);
app.use(userCookie);
//app.use("/products", productRouterDb);
app.use("/api/categories", categoriesApi);


//"ErrorDocument 404 /404.ejs"

app.get ("*",function(req,res){res.status(404).render('error')});