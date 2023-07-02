const sourceString = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const Url = require('./models/URL-shortener')

function randomCodeGenerator() {
  let randomStr = ""
  for (let i = 0; i < 5 ; i++) {
    let index = Math.floor(Math.random() * 62)
    randomStr += sourceString[index]
  }

  //若該隨機字串已存在於資料庫中，則再次呼叫函示重新產生新的字串
  Url.findOne({ shortened: randomStr })
    .lean()
    .then(data => {
      if (data !== null) {
        return randomCodeGenerator()
      }    
    })
  return randomStr
}

module.exports = randomCodeGenerator









