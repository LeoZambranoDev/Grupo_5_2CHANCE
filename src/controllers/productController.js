const path =require('path')
const fs= require('fs')
const productModel=require('../models/productModel')

const product={
    //se ocupa el método render para trabajar con view engine EJS
    register:(req,res)=>{
        res.render('./productViews/register')
    },
	//Se encarga  mostrar en la vista editar el producto por id
    update:(req,res)=>{
        let product = productModel.getProductById(req.params.id)
		if(product){
			res.render('./productViews/update',{product})
		}
		else{
			res.send('Error, no se ha encontrado el teléfono correspondiente al id'+req.params.id)
		}
    },
    store:(req,res)=>{  //ADD PRODUCT   //NOTA: terminar

        let newProduct = {
			"id": products.length + 1,
			"name": req.body.name,
			"price": req.body.price,
			"product_img": req.file.filename
		}

		//es necesario amacenarlo en una nueva variable para enviarlo al archivo
		let auxProducts = products
		auxProducts.push(newProduct)

		fs.writeFileSync(productsFilePath, JSON.stringify(auxProducts, null, ' '))

        res.redirect('/')
    },
    updateProduct:(req,res)=>{

		//Obtenemos el nombre de la imagen "antigua" o si subió una "nueva"
		let nameImg=req.body.imgCel_old
		if(req.file){
			nameImg=req.file.filename
		}

		//Creamos la variable contenedora de la nueva lista con el producto actualizado
        let auxProducts = []
		//recorremos y agregamos los productos junto con el editado
		productModel.getProducts().forEach(element=>{
			if (element.id == req.params.id) {
				auxProducts.push(
					{
					"id": req.params.id,
					"name": req.body.name,
					"price": req.body.price,
					"category":req.body.category,
					"color":req.body.color,
					"mark":req.body.mark,
					"memory":req.body.memory,
					"product_img": nameImg
				   }
				   )
			}
			else{
				auxProducts.push(element)
			}
		})
		
		//Guardamos el listado de productos en el Json
		productModel.saveProducts(auxProducts)

		res.redirect('/')
    },
    deleteProduct:(req,res)=>{
		//obtenemos la lista y eliminamos el que corresponda con el id
		let auxProducts = productModel.getProducts().filter(element=>(element.id != req.params.id))
		//Guardamos el resto de elementos
		productModel.saveProducts(auxProducts)

		res.redirect('/')
    },
    
}


module.exports=product;