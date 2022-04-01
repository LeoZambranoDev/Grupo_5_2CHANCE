const fs = require('fs');
const path =require('path');

const productController=require('./productController')

const main={
    //se ocupa el método render para trabajar con view engine EJS
    index:(req,res)=>{
        let products=productController.getProductByCategory('destacado')
        let productPro=productController.getProductById(8)// producto temporal
        res.render('home',{products,productPro})
    },
    categories:(req,res)=>{
        res.render('./productViews/categories', {products})
    },
    detail:(req,res)=>{
        res.render('./productViews/detalle')
    },
    shopingCart:(req,res)=>{
        res.render('./productViews/shopCart')
    }
}



module.exports=main;