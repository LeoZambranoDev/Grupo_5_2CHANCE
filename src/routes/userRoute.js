//Requerimos express para ocupar la clase router la cuál es instanciada en una variable
let express =require('express')
let router = express.Router()


//controlador del objeto literal user(userController.js)
const userController=require('../controllers/userController')


//RUTAS
router.get('/login',userController.login)
router.get('/register',userController.register)

//IMPORTANTE: exportar el módulo para poder ser usado en app.js
module.exports=router