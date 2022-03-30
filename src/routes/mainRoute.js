//Requerimos express para ocupar la clase router la cuál es instanciada en una variable
let express =require('express')
let router = express.Router()


//controlador del objeto literal main(mainController.js)
const mainController=require('../controllers/mainController')


//RUTAS
router.get('/',mainController.index)
router.get('/categories',mainController.categories)
router.get('/detail',mainController.detail)
router.get('/shopingCart', mainController.shopingCart)

//IMPORTANTE: exportar el módulo para poder ser usado en app.js
module.exports=router