const path =require('path')
const user={
    //se ocupa el método render para trabajar con view engine EJS
    login:(req,res)=>{
        res.render('login')
    },
    register:(req,res)=>{
        res.render('registerUser')
    },
}



module.exports=user;