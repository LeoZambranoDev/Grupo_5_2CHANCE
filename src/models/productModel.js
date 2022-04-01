const path =require('path')
const fs= require('fs')

module.exports={
    //Función encargada de obtener la lista de los productos
	getProducts:()=>{
		let productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
		return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	},
	getProductById:function(id){
		let products=this.getProducts()
		let product=products.find(element=>{
			return element.id==id
		})
		return product
	},
	getProductByCategory:function(cat){
		let products=this.getProducts()
		let product=products.filter(element=>{
			return element.category==cat
		})
		return product
	},
}