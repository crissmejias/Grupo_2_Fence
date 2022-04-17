// const path=require("path");
// const { homedir } = require("os");
const mainControllers={
    index:(req,res) =>{
        res.render("index");
      },
    productdetail:(req,res)=>{
        res.render("productDetail");
      },
      quoter:(req, res) => {
        res.render("quoter");
      },
      register:(req, res) => {
        res.render("register");
      },
      login:(req, res) => {
        res.render("login");
      },


}

module.exports=mainControllers;


 
  
 