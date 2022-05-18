const productModel = require('../models/productModel')

const product = {

	registerView: (req, res) => {
		//verificamos si el usuario está almacenado en session
		if (req.session.userLogged) {
			//verificamos que sea empleado o administrador
			if (req.session.userLogged.type.name == 'Employee' || req.session.userLogged.type.name == 'Admin') {
				res.render('./productViews/register')
			} else {
				res.redirect('/user/login')
			}
		} else {
			res.redirect('/user/login')
		}
	},
	registerProduct: async (req, res) => {

		//Requerimos la función para capturar los errores almacenados en req
		const { validationResult } = require('express-validator')
		let errors = validationResult(req)
		let errorsList = errors.errors
		//Listado de productos actuales
		let products = await productModel.getProducts()

		//asignación de imagen por defecto si no envían una
		let nameImg = 'default.jpg'
		if (req.file) {
			nameImg = req.file.filename
		}

		//Verificamos que no hayan errores
		if (errors.isEmpty()) {

			//creamos el producto para agregarloa  la lista 
			let newProduct = {
				"id": products.length + 1,
				"name": req.body.name,
				"price": req.body.price,
				"category": req.body.category,
				"color": req.body.color,
				"mark": req.body.mark,
				"memory": req.body.memory,
				"image": nameImg
			}

			//guardamos el nuevo producto 
			productModel.saveProduct(newProduct)

			//redirigimos a home si todo sale ok
			res.redirect('/')
		}
		else {
			//Evmiamos los errores para ser listados en el mismo formulario de registro
			res.render('productViews/register', { errorsList, product })
		}

	},
	updateView: async (req, res) => {
		//verificamos si el usuario está almacenado en session
		if (req.session.userLogged) {
			//verificamos que sea empleado o administrador
			if (req.session.userLogged.type.name == 'Employee' || req.session.userLogged.type.name == 'Admin') {
				//Obtenemos el producto por id
				let product = await productModel.getProductById(req.params.id)
				//verificamos que haya un resultado
				if (product) {
					res.render('./productViews/update', { product })
				}
				else {
					res.send('Error, no se ha encontrado el teléfono correspondiente al id' + req.params.id)
				}
	
			} else {
				res.redirect('user/login')
			}
			
		}else{
			res.send('error en 79-productController')
		}


	},
	updateProduct: (req, res) => {
		//Declaramos el producto que se actualizará
		let product = {
			"id":req.params.id,
			"name": req.body.name,
			"price": req.body.price,
			"category_id": req.body.category,
			"color_id": req.body.color,
			"brand_id": req.body.mark,
			"memory_id": req.body.memory,
			"ram_id": req.body.ram,
		}

		//Obtenemos el nombre de la imagen "nueva" si se actualizó
		if (req.file) {
			product.image = req.file.filename
		}

		//Guardamos el producto en DB
		productModel.updateProduct(product)

		res.redirect('/')
	},
	detailView:async (req, res) => {
		//Obtenemos el producto por id
		let product =await productModel.getProductById(req.params.id)
		//Obtenemos los productos correspondientes a la categoria
		let products =await productModel.getProductByCategory('MostViewed')
		res.render('./productViews/detalle', { product, products })
	},
	deleteProduct: async (req, res) => {
		//Eliminamos el producto
		await productModel.deleteProduct(req.params.id)

		res.redirect('/')
	},
	categoriesView:async (req, res) => {
		//Obtenemos los productos
		let products =await productModel.getProducts()
		res.render('./productViews/categories', { products })
	},
	shopingCartView: (req, res) => {
		//verificamos que el usuario haya iniciado sesion
		if (req.session.userLogged) {
			res.render('./productViews/shopCart')
		} else {
			res.redirect('/user/login')
		}
	}
}

module.exports = product;