const express = require("express");
const { homedir } = require("os");
const { dirname } = require("path");
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
/*sprint 4
const methodOverride = require('method-override');*/

const router = require("./routes/main");
const app = express();
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.set("view engine", "ejs");

/*sprint 4
app.use(express.urlencoded({ extended: false }));
//sprint 4
app.use(methodOverride('_method'));
*/

app.set("views", [
  path.join(__dirname, "views/products"),
  path.join(__dirname, "views/users"),
  path.join(__dirname, "views/administradores"), //sprint 4//
  path.join(__dirname, "views/"),
]);
app.listen(process.env.PORT || 3000, () =>
  console.log("Levantando un servidor con Express")
);
const rutaMain = require("./routes/main");
app.use("/", rutaMain);

/*sprint 4
const adminRoutes = require('./routes/admin');
app.use(adminRoutes);*/
