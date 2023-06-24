const express = require('express')
const router = express.Router()
const Url = require('../../models/URL-shortener')

//縮短網址
router.post('/', (req, res) => {
  const original = req.body.URL

  //如果沒輸入網址則不進行以下程式並提醒使用者
  if (!original.trim()) {
    const isEmpty = true
    return res.render('index', { isEmpty })
  }

  Url.findOne({ original })
    .lean()
    .then(url => {
      // 若資料庫已有該網址，則回傳短網址
      if (url) {
        res.render('shortener', { original, shortened: url.shortened })
      } else {
        // 若資料庫沒有該網址，則新增短網址
        const shortened = "http://localhost:3000/" + randomCodeGenerator()
        Url.create({ original, shortened })
          .then((data) => res.render('shortener', { shortened }))
          .catch(error => console.log(error))
      }
    })
    .catch(error => console.log(error))
})


module.exports = router