const fs = require('fs');
const path =require('path');
// para configurar la base de datos provisional:
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const main={
    //se ocupa el método render para trabajar con view engine EJS
    index:(req,res)=>{
        res.render('home')
    },
    categories:(req,res)=>{
        res.render('./productViews/categories', {products})
    },
    detail:(req,res)=>{
        res.render('./productViews/detalle')
    },
}



module.exports=main;