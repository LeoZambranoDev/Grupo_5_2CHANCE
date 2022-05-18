const fs = require('fs');
const path =require('path');
const db = require('../data/models');

const productModel=require('../models/productModel')

const main={
    //se ocupa el método render para trabajar con view engine EJS
    index: async(req,res)=>{
        //Obenemos el listado de productos que pertenecen a la categoría Main
        let productsMain= await productModel.getProductByCategory('Main')
        //Temporalmente solo enviamos un product 
        let productPro=productsMain[0]
        //Obenemos el listado de productos
        let products= await productModel.getProducts()
        res.render('home',{products,productPro})
    }
}



module.exports=main;