//Requerimos express para ocupar la clase router la cuál es instanciada en una variable
let express =require('express')
let router = express.Router()

//controlador del objeto literal main(mainController.js)
const mainController=require('../controllers/mainController')

//RUTAS
router.get('/',mainController.index)

// Apis para cargar selects
router.get('/api/brands',mainController.brands)
router.get('/api/categories',mainController.categories)
router.get('/api/colors',mainController.colors)
router.get('/api/memories',mainController.memories)
router.get('/api/rams',mainController.rams)
router.get('/api/types',mainController.types)



//IMPORTANTE: exportar el módulo para poder ser usado en app.js
module.exports=router