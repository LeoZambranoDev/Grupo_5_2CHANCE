const fetch = require('node-fetch')

const productModel = require('../models/productModel')
const productModelApi = require('../models/productModelApi')
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
		// //error de multer con la imagen
		if (req.fileValidationError) {
			errorsList.push({
				value: '',
				msg: req.fileValidationError,
				param: 'img',
				location: 'body'
			})
		}
		//Verificamos que no hayan errores
		if (errors.isEmpty()) {

			//creamos el producto para agregarloa  la lista 
			let newProduct = {
				"id": products.length + 1,
				"name": req.body.name,
				"price": req.body.price,
				"category_id": req.body.category,
				"color_id": req.body.color,
				"brand_id": req.body.mark,
				"memory_id": req.body.memory,
				"ram_id": req.body.ram,
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

				//Obtenemos los datos para cargar dinámicamente los selects del html
				let brands = await fetch('http://localhost:3001/api/brands').then(list => list.json())
				let colors = await fetch('http://localhost:3001/api/colors').then(list => list.json())
				let memories = await fetch('http://localhost:3001/api/memories').then(list => list.json())
				let categories = await fetch('http://localhost:3001/api/categories').then(list => list.json())
				let rams = await fetch('http://localhost:3001/api/rams').then(list => list.json())

				// verificamos que haya un resultado
				if (product) {
					res.render('./productViews/update', { product, brands, colors, memories, categories, rams })
				}
				else {
					res.send('Error, no se ha encontrado el teléfono correspondiente al id' + req.params.id)
				}

			} else {
				res.redirect('user/login')
			}

		} else {
			res.send('error en 79-productController')
		}


	},
	updateProduct: (req, res) => {
		//Declaramos el producto que se actualizará
		let product = {
			"id": req.params.id,
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
	detailView: async (req, res) => {
		//Obtenemos el producto por id
		let product = await productModel.getProductById(req.params.id)
		//Obtenemos los productos correspondientes a la categoria
		let products = await productModel.getProductByCategory('MostViewed')
		res.render('./productViews/detalle', { product, products })
	},
	deleteProduct: async (req, res) => {
		//Eliminamos el producto
		await productModel.deleteProduct(req.params.id)

		res.redirect('/')
	},
	categoriesView: async (req, res) => {
		//Obtenemos los productos
		let products = await productModel.getProducts()
		res.render('./productViews/categories', { products })
	},
	shopingCartView: async (req, res) => {
		//verificamos que el usuario haya iniciado sesion
		if (req.session.userLogged) {
			let products = await productModel.getProductByCategory('MostViewed')
			res.render('./productViews/shopCart', { products })
		} else {
			res.redirect('/user/login')
		}
	},
	categorySearch: async (req, res) => {
		let search = req.body.search
		let products = await productModel.getProductsByName(search)
		res.render('./productViews/categories', { products })
	},
	apiProductList: async (req, res) => {
        let ProductList= await productModelApi.getAllProducts()
              let ListDetails =[]
        
        ProductList.forEach(element => {
            let product = {
                id: element.id,
                name: element.name,
				brand: element.brand? element.brand.name : '',   
				price: element.price,   
				
                detail: 'http://localhost:3001/product/api/'+element.id
            }
            ListDetails.push(product)
        });
   //   console.log(ProductList[1].brand.name);
        return res.status(200).json({
            meta: {
                status: 200,
                total: ProductList.length,
                url: 'http://localhost:3001/product/api/list',
                method: 'GET'
            },
            data: ListDetails
        })
    },
    apiProductDetail: async (req, res) => {

        let product = await productModelApi.getProductById(req.params.id)
        res.status(200).json({
            meta: {
                status: 200,
                total: 1,
                url: 'http://localhost:3001/product/api/:'+req.params.id,
                method: 'GET'
            },
            data: product
        })
    },
	lastProduct: async (req, res) => {
		let product = await productModel.getLastProduct()
		res.status(200).json({
            meta: {
                status: 200,
                total: 1,
                url: 'http://localhost:3001/product/api/lastProduct',
                method: 'GET'
            },
            data: product
        })
	},
	apiProductMostViewed: async (req, res) => {
		let products = await productModel.getProductByCategory('MostViewed')
		res.status(200).json({
            meta: {
                status: 200,
                total: products.length,
                url: 'http://localhost:3001/product/api/mostViewed',
                method: 'GET'
            },
            data: products
        })
	}
}


module.exports = product;