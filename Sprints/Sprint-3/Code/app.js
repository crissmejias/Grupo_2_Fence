const express = require("express");
const { homedir } = require("os");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.set("view engine","ejs");
app.listen(process.env.PORT || 3000, () =>
  console.log("Levantando un servidor con Express")
);
const rutaMain = require('./routes/main');
app.use("/",rutaMain);

