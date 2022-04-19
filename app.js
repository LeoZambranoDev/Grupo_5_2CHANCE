
//Requerimos express para ser usado como servidor
const express=require('express')
//Inicializamos 
const app= express()
//Variable para acceder a las rutas
const path=require('path');
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//Configuramos la carpeta public
app.use(express.static(path.resolve('public')))

//OVERRIDE
const methodOverride =  require('method-override');
app.use(methodOverride('_method'));

//Listen para que el server se mantenga escuchando al puerto
app.listen(process.env.PORT || 8000,() => console.log('Server running in 8000 port'));

//Configuramos la app para que trabje con EJS como motor template engine
app.set('view engine','ejs')
//configuramos la ruta de la carpeta contenedora de templates(views)
app.set('views',path.resolve(__dirname+'/src/views'))


//Enrutadores
let mainRoute= require('./src/routes/mainRoute')
let userRoute= require('./src/routes/userRoute')
let productRoute= require('./src/routes/productRoute')

//Ruta home
app.use('/',mainRoute)


//Ruta Users
app.use('/user',userRoute)

//Rutas products
app.use('/product',productRoute)



//Por definir(TEMPORALMENTE EN MAIN)
app.use('/categories',mainRoute)
// app.get('/categories',(req,res)=>{
//     res.sendFile(path.resolve('views/categories.html'))
// })

//POR DEFINIR(TEMPORALMENTE EN MAIN)
app.use('/detail',mainRoute)
// app.get('/detalle',(req,res)=>{
//     res.sendFile(path.resolve('views/detalle.html'))
// })

//POR DEFINIR(TEMPORALMENTE EN MAIN)
//app.use('/shopingCart',mainRoute)
// app.get('/detalle',(req,res)=>{
//     res.sendFile(path.resolve('views/detalle.html'))
// })