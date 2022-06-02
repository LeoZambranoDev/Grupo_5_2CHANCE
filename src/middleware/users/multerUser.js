const path=require('path')
// CONFIGURACIÓN MULTER
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../../public/img/users'))
    },
    fileFilter: function (req, file, cb) {
        let typeArray = file.mimetype.split('/');
        let fileType = typeArray[1];
        if (fileType == 'jpg' || fileType == 'png') {
          cb(null, true);
        } else {
          cb(new Error('mensaje de error 123123'))
        }
    },
    filename: function (req, file, cb) {
        let newName= Date.now() + path.extname(file.originalname)
        cb(null, newName)
    }
    
  })

//Importante: Esta varibale es la ocupada para subir la img, upload.single('nameInput')
const upload = multer({ storage })


module.exports=upload
