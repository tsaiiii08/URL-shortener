const express =require('express')
const router = express.Router()

const home = require('./modules/home')
router.use('/',home)
const shortened = require('./modules/shortened')
router.use('/URL-shortener', shortened)

module.exports = router