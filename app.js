//建立伺服器
const express= require('express')
require('./config/mongoose')
const Url = require('./models/URL-shortener')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const randomCodeGenerator = require('./randomCodeGenerator')
const app = express()

//設定樣板引擎
app.engine('handlebars',exphbs.engine({default:"main"}))
app.set('view engine','handlebars')
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
  res.render('index')
})

//縮短網址
app.post('/URL-shortener',(req,res)=>{
  const original = req.body.URL

  //如果沒輸入網址則不進行以下程式並提醒使用者
  if(! original.trim()){
    const isEmpty = true
    return res.render('index',{isEmpty})
  } 

  Url.findOne({ original })
    .lean()
    .then(url => {
      // 若資料庫已有該網址，則回傳短網址
      if (url) {
        res.render('shortener', { original,shortened: url.shortened })
      } else {
        // 若資料庫沒有該網址，則新增短網址
        const shortened = "http://localhost:3000/" + randomCodeGenerator()
        Url.create({ original, shortened })
          .then((data) => res.render('shortener', {shortened}))
          .catch(error => console.log(error))
      }
    })
    .catch(error => console.log(error))
})

//利用短網址連接到原網址畫面
app.get('/:shortened',(req,res)=>{
  const shortened = "http://localhost:3000/" + req.params.shortened
  Url.findOne({ shortened })
  .lean()
  .then(data=>{
    if(data){
      res.redirect(data.original)
    } else {
      res.render('error')
    }
  })

})

app.listen(3000,()=>{
  console.log('app is runnung on port 3000')
})




