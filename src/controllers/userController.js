const bcrypt = require('bcryptjs/dist/bcrypt')
const path = require('path')

const userModel = require('../models/userModel')
const user = {
    //se ocupa el método render para trabajar con view engine EJS
    login: (req, res) => {
        res.render('./userViews/login')
    },
    registerView: (req, res) => {
        res.render('./userViews/registerUser')
    },
    register: (req, res) => {
        //Requerimos la función para capturar los errores almacenados en req
        const { validationResult } = require('express-validator')
        let errors = validationResult(req)
        let errorsList = errors.errors
        //Requerimos todos los usuarios almacenados para agregar el nuevo y escribirlos en en json

        let usersList = userModel.getUsers()

        //Verificamos incialmente la validación de los inputs del form
        if (errors.isEmpty()) {

            //Verificamos que el proceso de comparar y encriptar las contras haya salido bien(true)
            if (req.body.passConfirm) {

                // Verificamos que haya una imagen de perfil y asignamos en una variable para su posterior uso
                let nameImg = 'default.jpg'
                if (req.file) {
                    nameImg = req.file.filename
                }
                //creamos el usuario para ser guardado
                let user = {
                    "id": usersList.length + 1,
                    "firstName": "",
                    "lastName": "",
                    "nick": req.body.nick,
                    "email": req.body.email,
                    "pass": req.body.pass,
                    "address": "",
                    "type": "client",
                    "image": nameImg,
                    "status": "active"
                }
                //agregamos el usuario a la lista
                usersList.push(user)

                //Guardamos en el json
                userModel.saveUserList(usersList)
                res.redirect("/")
            } else {
                //agregamos un error para cuando las contraseñas no coinciden
                errorsList.push({
                    value: '',
                    msg: 'Las contraseñas deben coincidir',
                    param: 'passConfirm',
                    location: 'body'
                })

                //enviamos el error a la vista
                res.render('userViews/registerUser', { errorsList })
            }
        }
        else {
            console.log(errorsList);
            res.render('userViews/registerUser', { errorsList })
        }
    },
    // proceso de login 
    loginProcess: (req, res) => {
        let userToLogin = userModel.getUserByField('email', req.body.email);
        if (userToLogin) {
            let checkThePassword = bcrypt.compareSync(req.body.pass, userToLogin.pass)
            if (checkThePassword) {
                // para mantener la información en sesión
                delete userToLogin.pass;
                req.session.userLogged = userToLogin;
                return res.redirect('/user/profile');
            }

            return res.render('./userViews/login', {
                errors: {
                    tipo: 'pass',
                    msg: 'La contraseña está incorrecta'
                }

            });
        }

        return res.render('./userViews/login', {
            errors: {
                tipo: 'email',
                msg: 'Este correo no se encuentra registrado'

            }
        });

    },
    profile: (req, res) => {

        if(req.session.userLogged){
            res.render('userViews/profile', {
                user: req.session.userLogged
            });
        }else{
            res.redirect('user/login')
        }

    }
}



module.exports = user;