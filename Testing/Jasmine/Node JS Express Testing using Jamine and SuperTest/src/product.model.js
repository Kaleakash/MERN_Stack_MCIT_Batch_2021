let mongoose = require("mongoose");

let ProductSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number
})

let ProductModel = mongoose.model("",ProductSchema,"Product");

module.exports=ProductModel;