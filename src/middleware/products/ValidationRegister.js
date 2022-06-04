const {body}=require('express-validator')

module.exports=[
    body('name').isLength({min:6}).withMessage("El nombre del producto debe tener al menos 5 caracteres."),
    body('price').isNumeric().withMessage("Ingrese un precio válido(solo números)."),
    body('category').notEmpty().withMessage("Debe seleccionar una categoría"),
    body('color').notEmpty().withMessage("Debe seleccionar un color"),
    body('mark').notEmpty().withMessage("Debe seleccionar una marca"),
    body('memory').notEmpty().withMessage("Debe seleccionar la capacidad de memoria"),
    body('ram').notEmpty().withMessage("Debe seleccionar la cantidad de memoria RAM"),
]