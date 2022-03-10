const path =require('path')
const main={
    //se ocupa el método render para trabajar con view engine EJS
    index:(req,res)=>{
        res.render('home')
    },
    categories:(req,res)=>{
        res.render('./productViews/categories')
    },
    detail:(req,res)=>{
        res.render('./productViews/detalle')
    },
}



module.exports=main;