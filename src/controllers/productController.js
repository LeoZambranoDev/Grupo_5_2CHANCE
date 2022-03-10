const path =require('path')
const product={
    //se ocupa el método render para trabajar con view engine EJS
    register:(req,res)=>{
        res.render('./productViews/register')
    },
    update:(req,res)=>{
        res.render('./productViews/update')
    },
    
}



module.exports=product;