// This file provide model using schema 
// load the module 
let mongoose = require("mongoose");

//Creating schema 
let ProductSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number
});

// we have to create the model using schema 
let ProductModel = mongoose.model("",ProductSchema,"Product");

module.exports=ProductModel;

