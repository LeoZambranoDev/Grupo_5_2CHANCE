//Requerimos express para ocupar la clase router la cuál es instanciada en una variable
let express =require('express')
let router = express.Router()


//controlador del objeto literal user(userController.js)
const userController=require('../controllers/userController')

// MULTER MIDDLEWARE
const upload=require('../middleware/users/multerUser')
// MULTER MIDDLEWARE

// Middleware para encriptar la contraseña
const bcrypt =require('../middleware/users/encPassUser')
// Middleware para encriptar la contraseña

// Middleware para validar los campos provenientes del form
const validationUserRegister =require('../middleware/users/validationUserRegister')
// Middleware para validar los campos provenientes del form
//RUTAS
router.get('/login',userController.login)
router.post('/login', userController.loginProcess)
router.get('/register',userController.registerView)
router.post('/register',upload.single('img-perfil'),validationUserRegister,bcrypt.encPass,userController.register)
// Perfil de usuario
router.get('/profile',userController.profile)
//IMPORTANTE: exportar el módulo para poder ser usado en app.js
module.exports=router