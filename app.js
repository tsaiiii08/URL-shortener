//建立伺服器
const express= require('express')
require('./config/mongoose')
const exphbs = require('express-handlebars')
const app = express()

//設定樣板引擎
app.engine('handlebars',exphbs.engine({default:"main"}))
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
  res.render('index')
})

app.post('/URL-shortener',(req,res)=>{
  return res.redirect('/URL-shortener')
})

app.get('/URL-shortener',(req,res)=>{
  res.render('shortener')
})

app.listen(3000,()=>{
  console.log('app is runnung on port 3000')
})