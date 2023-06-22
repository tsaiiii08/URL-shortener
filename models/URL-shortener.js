const mongoose = require('mongoose')
const Schema = mongoose.Schema
const URL_shortenerSchema = new Schema({
  original:{
    type:String,
    required:true
  },
  shortened: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('URL_shortener', URL_shortenerSchema)