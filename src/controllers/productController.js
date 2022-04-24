const path = require('path')
const fs = require('fs')
const productModel = require('../models/productModel')


const product = {
	
	registerView: (req, res) => {
		if (req.session.userLogged.type == 'vendedor') {
			res.render('./productViews/register')
		} else {
			res.redirect('user/login')
		}

	},
	registerProduct: (req, res) => { 

		//Requerimos la función para capturar los errores almacenados en req
		const { validationResult } = require('express-validator')
		let errors = validationResult(req)
		let errorsList = errors.errors
		//Listado de productos actuales
		let products = productModel.getProducts()

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
				"product_img": nameImg
			}

			//Agregamos el nuevo producto y guardamos
			products.push(newProduct)
			productModel.saveProducts(products)
			//redirigimos a home si todo sale ok
			res.redirect('/')
		}
		else {
			//Evmiamos los errores para ser listados en el mismo formulario de registro
			res.render('productViews/register', { errorsList, product })
		}

	},
	updateView: (req, res) => {

		if (req.session.userLogged.type == 'vendedor') {

			let product = productModel.getProductById(req.params.id)
			if (product) {
				res.render('./productViews/update', { product })
			}
			else {
				res.send('Error, no se ha encontrado el teléfono correspondiente al id' + req.params.id)
			}

		} else {
			res.redirect('user/login')
		}


	},
	updateProduct: (req, res) => {

		//Obtenemos el nombre de la imagen "antigua" o si subió una "nueva"
		let nameImg = req.body.imgCel_old
		if (req.file) {
			nameImg = req.file.filename
		}

		//Creamos la variable contenedora de la nueva lista con el producto actualizado
		let auxProducts = []
		//recorremos y agregamos los productos junto con el editado
		productModel.getProducts().forEach(element => {
			if (element.id == req.params.id) {
				auxProducts.push(
					{
						"id": req.params.id,
						"name": req.body.name,
						"price": req.body.price,
						"category": req.body.category,
						"color": req.body.color,
						"mark": req.body.mark,
						"memory": req.body.memory,
						"product_img": nameImg
					}
				)
			}
			else {
				auxProducts.push(element)
			}
		})

		//Guardamos el listado de productos en el Json
		productModel.saveProducts(auxProducts)
		
		res.redirect('/')
	},
	detailView: (req, res) => {
		let product = productModel.getProductById(req.params.id)
		let products= productModel.getProductByCategory('destacado')
		res.render('./productViews/detalle', { product,products })
	},
	deleteProduct: (req, res) => {
		//obtenemos la lista y eliminamos el que corresponda con el id
		let auxProducts = productModel.getProducts().filter(element => (element.id != req.params.id))
		//Guardamos el resto de elementos
		productModel.saveProducts(auxProducts)

		res.redirect('/')
	},
	categoriesView: (req, res) => {
		let products = productModel.getProducts()
		res.render('./productViews/categories', { products })
	},
	shopingCartView: (req, res) => {
		if (req.session.userLogged) {
			res.render('./productViews/shopCart')
		}else{
			res.redirect('/user/login')
		}
	}

}


module.exports = product;