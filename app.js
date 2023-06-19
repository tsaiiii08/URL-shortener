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




const upperChars = []
const lowerChars = []
const arrNum = [0,1,2,3,4,5,6,7,8,9]

// A ~ Z 的編碼是 65 ~ 90
for (let i = 65; i < 91; i++) {
  let char = String.fromCharCode(i)
  upperChars.push(char)
  lowerChars.push(char.toLowerCase())
}
const arrChar = upperChars.concat(lowerChars)


function randomChar(){
  let randomStr = []
  const numOfNum = (Math.floor(Math.random()*4))+1 //數字介於一到四個之間

  for (let i = 1; i <= 5-numOfNum; i++) {
    let randomChar = arrChar[Math.floor(Math.random() * 52)]
    randomStr.push(randomChar)
  }
  for (let i = 1; i <=numOfNum; i++) {
    let randomNum = arrNum[Math.floor(Math.random() * 10)]
    randomStr.splice((Math.floor(Math.random() * (5 - numOfNum))), 0, randomNum)
  }

  return randomStr.join('')
  
}


