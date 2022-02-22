
//Requerimos express para ser usado como servidor
const express=require('express')
//Inicializamos 
const app= express()
//Variable para acceder a las rutas
const path=require('path')
//Configuramos la carpeta public
app.use(express.static(path.resolve('public')))

//Listen para que el server se mantenga escuchando al navegador
app.listen(8000,() =>"Server running in port 8000")

app.get('/',(req,res)=>{
    //res.sendFile(path.resolve('views/home.html'))
    res.send("Funcionando")
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve('views/login.html'))
    
})

