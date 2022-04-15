//Requerimos express para ocupar la clase router la cuál es instanciada en una variable
let express =require('express')
let router = express.Router()
const path= require('path')

// CONFIGURACIÓN MULTER
const uploadProduct = require('../middleware/products/multerProduct')

//controlador del objeto literal product(productController.js)
const productController=require('../controllers/productController')

//Rutas para vistas(ejs)
router.get('/register',productController.register)              //view register
router.get('/update/:id',productController.update)              //view update
router.get('/categories',productController.categoriesView)      //view Categories
router.get('/detail',productController.detailView)              //view DetailProduct
router.get('/shopingCart', productController.shopingCartView)   //view ShoppingCart

//Rutas por métodos != get
router.post('/',uploadProduct.single('imgCel'),productController.store)    // add product
router.put('/:id',uploadProduct.single('imgCel'),productController.updateProduct)//update product
router.delete('/:id',productController.deleteProduct)      //delete product




//IMPORTANTE: exportar el módulo para poder ser usado en app.js
module.exports=router