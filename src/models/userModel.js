const path =require('path')
const fs= require('fs')
//Lugar de almacenamiento de json 
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
userModel={
    //Función encargada de obtener la lista de los usuarios
	getUsers:()=>{
		return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
	},
	generateId: function() {
		let users = this.getUsers();
		let lastUser = users.pop();
		if (lastUser) {
		return lastUser.id + 1;
	}
	return 1;
	},
	getUserById:function(id){
		let users=this.getUsers()
		let user=users.find(element=>{
			return element.id==id
		})
		return user
	},
	getUserByField:function(field, text){
		let users=this.getUsers()
		let user=users.find(element=>{
			return element[field]==text
		})
		return user;
		
	},
	create: function(userData){
		let users = this.getUsers();
		let newUser = {
			id: this.generateId(),
			...userData
		};
		users.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
		return newUser;
	},
    saveUserList:(usersList)=>{
        fs.writeFileSync(usersFilePath, JSON.stringify(usersList, null, ' '))
    },
delete: function(id) {
	let users = this.getUsers();
	let finalUsers = users.filter(oneUser => oneUser.id !== id);
	fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
	return true;
}
}
userModel.getUserByField('email', 'ernestino@correo.com')
module.exports = userModel;


