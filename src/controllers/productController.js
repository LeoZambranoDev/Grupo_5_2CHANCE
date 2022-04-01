const path =require('path')
const fs= require('fs')
const productModel=require('../models/productModel')

const product={
    //se ocupa el método render para trabajar con view engine EJS
    register:(req,res)=>{
        res.render('./productViews/register')
    },
	//Se encarga  mostrar en la vista editar el producto por id
    update:function(req,res){
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
        let auxProducts = []
		products.forEach(x => {
			if (x.id == req.params.id) {
				let newProduct = {
					"id": x.id,
					"name": req.body.name,
					"price": req.body.price,
					"product_img": req.file.filename
				}
				auxProducts.push(newProduct)
			}
			else {
				auxProducts.push(x)
			}
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(auxProducts, null, ' '))

		res.redirect('/')
    },
    deleteProduct:(req,res)=>{

		let auxProducts = []
		products.forEach(x => {
			if (x.id != req.params.id) {
				auxProducts.push(x)
			}
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(auxProducts, null, ' '))

		res.redirect('/')
    },
    
}


module.exports=product;