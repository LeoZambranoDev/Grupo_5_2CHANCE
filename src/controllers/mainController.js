const path =require('path')
const main={
    //se ocupa el método render para trabajar con view engine EJS
    index:(req,res)=>{
        res.render('home')
    },
    categories:(req,res)=>{
        res.render('categories')
    },
    detail:(req,res)=>{
        res.render('detalle')
    },
}



module.exports=main;