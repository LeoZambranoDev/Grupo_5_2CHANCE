
//Requerimos express para ser usado como servidor
const express=require('express')
//Inicializamos 
const app= express()
//Variable para acceder a las rutas
const path=require('path')
//Configuramos la carpeta public
app.use(express.static(path.resolve('public')))

//Listen para que el server se mantenga escuchando al navegador
app.listen(process.env.PORT || 8000,() => console.log('Server running in 8000 port'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve('views/home.html'))
    // res.send("Funcionando")
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve('views/login.html'))
    
})
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve('views/registerUser.html'))
})
app.get('/categories',(req,res)=>{
    res.sendFile(path.resolve('views/categories.html'))
    
})

app.get('/detalle',(req,res)=>{
    res.sendFile(path.resolve('views/detalle.html'))
    
})