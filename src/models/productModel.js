const path =require('path')
const fs= require('fs')

const db= require('../data/models')

module.exports={
    //Función encargada de obtener la lista de los productos
	getProducts: async()=>{
		let aux= await db.Product.findAll()
		return aux
	},
	//Obtener producto por Id
	getProductById:async function(id){
		let product= await db.Product.findByPk(id)
		return product
	},
	//Obtener productos por categoría
	getProductByCategory:async function(cat){
		let category=await db.Category.findOne({
			where:{
				name:cat
			}
		})
		let products=await db.Product.findAll({
			where:{
				category_id:category.id
			}
		})
		return products
	},
	//Guardar un producto
	saveProduct:(product)=>{
		db.Product.create(product)
	},
	//Actualizar prducto
	updateProduct:(product)=>{
		db.Product.update(product,{
			where:{
				id:product.id
			}
		})
	},
	//Eliminar producto
	deleteProduct:async (idProduct)=>{
		await db.Product.destroy({
			where:{
				id:idProduct
			}
		})
	}
}