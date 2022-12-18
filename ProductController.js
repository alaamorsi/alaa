const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
  id:String,
  title:String,
  poster_path:String,
  overview:String,
  typeRoom:String,
  area:Number,
  price:Number,
  showDetail:Boolean,

})

module.exports = mongoose.model('Product', productSchema)