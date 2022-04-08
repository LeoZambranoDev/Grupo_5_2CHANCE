const path =require('path')
const fs= require('fs')
//Lugar de almacenamiento de json 
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
module.exports={
    //Función encargada de obtener la lista de los usuarios
	getUsers:()=>{
		return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
	},
	getUserById:function(id){
		let users=this.getUsers()
		let user=users.find(element=>{
			return element.id==id
		})
		return user
	},
    saveUserList:(usersList)=>{
        fs.writeFileSync(usersFilePath, JSON.stringify(usersList, null, ' '))
    }

}