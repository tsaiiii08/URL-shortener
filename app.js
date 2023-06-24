const express= require('express')
require('./config/mongoose')
const Url = require('./models/URL-shortener')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const randomCodeGenerator = require('./randomCodeGenerator')
const routes =require('./routes')
const app = express()


app.engine('handlebars',exphbs.engine({default:"main"}))
app.set('view engine','handlebars')
app.use(bodyParser.urlencoded({extended:true}))
app.use(routes)


app.listen(3000,()=>{
  console.log('app is runnung on port 3000')
})




