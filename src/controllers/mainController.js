const fs = require('fs');
const path =require('path');

const productModel=require('../models/productModel')

const main={
    //se ocupa el método render para trabajar con view engine EJS
    index:(req,res)=>{
        let products=productModel.getProductByCategory('destacado')
        let productPro=productModel.getProductById(8)// producto temporal
        res.render('home',{products,productPro})
    },
    categories:(req,res)=>{
        let products=productModel.getProducts()
        res.render('./productViews/categories', {products})
    },
    detail:(req,res)=>{
        
        let products=productModel.getProductByCategory('destacado')
        res.render('./productViews/detalle',{products})
    },
    shopingCart:(req,res)=>{
        res.render('./productViews/shopCart')
    }
}



module.exports=main;