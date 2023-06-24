const express = require('express')
const router = express.Router()
const Url = require('../../models/URL-shortener')

router.get('/', (req, res) => {
  res.render('index')
})

//利用短網址連接到原網址畫面
router.get('/:shortened', (req, res) => {
  const shortened = "http://localhost:3000/" + req.params.shortened
  Url.findOne({ shortened })
    .lean()
    .then(data => {
      if (data) {
        res.redirect(data.original)
      } else {
        res.render('error')
      }
    })

})

module.exports = router