const fs = require('fs');
const path =require('path');

const productModel=require('../models/productModel')

const main={
    //se ocupa el método render para trabajar con view engine EJS
    index:(req,res)=>{
        let products=productModel.getProductByCategory('destacado')
        let productPro=productModel.getProductById(8)// producto temporal
        res.render('home',{products,productPro})
    }
}



module.exports=main;