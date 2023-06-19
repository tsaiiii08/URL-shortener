const mongoose = require('mongoose')
const Schema = mongoose.Schema
const URL_shortenerSchema = new Schema({
  oringinal:{
    type:String,
    required:true
  },
  shortend: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('URL_shortener', URL_shortenerSchema)