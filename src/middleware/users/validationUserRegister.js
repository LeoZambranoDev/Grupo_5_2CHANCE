const {body}=require('express-validator')

module.exports=[
    body('nick').isLength({min:5}).withMessage("Ingrese un usuario válido."),
    body('email').isEmail().withMessage("Ingrese un email válido."),
    body('pass').isLength({min:5}).withMessage("La contraseña debe tener más de 5 carácteres"),
    body('passConfirm').isLength({min:5}).withMessage("La confirmación de contraseña debe tener más de 5 carácteres"),
]