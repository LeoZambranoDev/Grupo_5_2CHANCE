const path=require('path')
// CONFIGURACIÓN MULTER
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../../public/img/products'))
    },
    filename: function (req, file, cb) {
        let newName= Date.now() + path.extname(file.originalname)
        cb(null, newName)
    }
  })

//Importante: Esta varibale es la ocupada para subir la img, upload.single('nameInput')
const upload = multer({ storage })


module.exports=upload
