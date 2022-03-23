const express = require('express');
const { homedir } = require('os');
const path= require("path");
const app = express();
const publicPath=path.resolve(__dirname,"./public")
app.use(express.static(publicPath));
app.listen(3000,()=>console.log("Levantando un servidor con Express"));
app.get ("/",(req,res)=>{res.sendFile(path.resolve(__dirname,"./views/index.html"))});
app.get ("/productDetail",(req,res)=>{res.sendFile(path.resolve(__dirname,"./views/productDetail.html"))});
app.get ("/quoter",(req,res)=>{res.sendFile(path.resolve(__dirname,"./views/quoter.html"))});
app.get ("/register",(req,res)=>{res.sendFile(path.resolve(__dirname,"./views/register.html"))});
app.get ("/login",(req,res)=>{res.sendFile(path.resolve(__dirname,"./views/login.html"))});