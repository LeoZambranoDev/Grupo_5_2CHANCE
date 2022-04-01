const path =require('path')
const fs= require('fs')


const product={
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
    //se ocupa el método render para trabajar con view engine EJS
    register:(req,res)=>{
        res.render('./productViews/register')
    },
	//Se encarga de enviar y mostrar en la vista editar un producto
    update:function(req,res){
		let products=this.getProducts()
		
        let product = products.find(ele=>
             ele.id==req.params.id
        )
		if(product!= -1){
			res.render('./productViews/update',{product})
		}
		res.send('Error, no se ha encontrado el teléfono correspondiente al id'+req.params.id)

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