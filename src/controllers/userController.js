const path =require('path')
const user={
    //se ocupa el método render para trabajar con view engine EJS
    login:(req,res)=>{
        res.render('./userViews/login')
    },
    register:(req,res)=>{
        res.render('./userViews/registerUser')
    },
}



module.exports=user;