//Requerimos express para ocupar la clase router la cuál es instanciada en una variable
let express =require('express')
let router = express.Router()
const path= require('path')
// CONFIGURACIÓN MULTER
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img/products'))
    },
    filename: function (req, file, cb) {
    
        let newName= Date.now() + file.originalname
      cb(null, newName)
    }
  })

const upload = multer({ storage })



//controlador del objeto literal product(productController.js)
const productController=require('../controllers/productController')

//RUTAS
router.get('/register',productController.register) // view register
router.get('/update/:id',productController.update)     //view update
router.post('/',upload.single('imgCel'),productController.store)    // add product

router.put('/:id',upload.single('imgCel'),productController.updateProduct)      //update product
router.delete('/:id',productController.deleteProduct)      //delete product

//IMPORTANTE: exportar el módulo para poder ser usado en app.js
module.exports=router