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
    },
    brands:(req,res)=>{
        db.Brand.findAll({
            include:['products']
        })
        .then(brands=>{
            return res.json(brands)
        }).catch(e=>{
            console.log(e)
        })
    },
    categories:(req,res)=>{
        db.Category.findAll()
        .then(x=>{
            return res.json(x)
        }).catch(e=>{
            console.log(e)
        })
    },
    colors:(req,res)=>{
        db.Color.findAll()
        .then(x=>{
            return res.json(x)
        }).catch(e=>{
            console.log(e)
        })
    },
    memories:(req,res)=>{
        db.Memory.findAll()
        .then(x=>{
            return res.json(x)
        }).catch(e=>{
            console.log(e)
        })
    },
    rams:(req,res)=>{
        db.Ram.findAll()
        .then(x=>{
            return res.json(x)
        }).catch(e=>{
            console.log(e)
        })
    },
    types:(req,res)=>{
        db.Type.findAll()
        .then(x=>{
            return res.json(x)
        }).catch(e=>{
            console.log(e)
        })
    }
}



module.exports=main;