const express = require ('express')
const path =require('path')
const exphbs =require('express-handlebars')
const logger = require('./middleware')
const router = require('./Routes/API/members')
const app = express()
//handlebars Middleware
app.engine('handlebars', exphbs('main'));
app.set('view engine', 'handlebars');
//Body parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//homepage route
app.get('/',(req,res)=>
    res.render('index')
)

//init middleware
// app.use(logger)
// //set static folder
app.use(express.static(path.join(__dirname,'simple')))
//members API Routes
app.use('/api/members',router)
const PORT = process.env.PORT || 5000
app.listen(PORT,() => console.log(`Sever started on port ${PORT} `))