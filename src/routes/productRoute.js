//Requerimos express para ocupar la clase router la cuál es instanciada en una variable
let express =require('express')
let router = express.Router()


//controlador del objeto literal product(productController.js)
const productController=require('../controllers/productController')


//RUTAS
router.get('/register',productController.register)
router.get('/update',productController.update)

//IMPORTANTE: exportar el módulo para poder ser usado en app.js
module.exports=router