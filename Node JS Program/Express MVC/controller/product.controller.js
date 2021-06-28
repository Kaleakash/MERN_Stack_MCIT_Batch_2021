// import {ProductModel} from 'product.model.js'

let Product = require("../model/product.model");

let getProductDetails = (req,res)=>{

        Product.find({},(err,result)=>{
                if(!err){
                    res.send(result);
                }
        })
}
//{pid:100,price:130000} request body 
let updateProductPrice=(req,res)=>{
         let id = req.body.pid;       // data from req body          
         let priceUpdate = req.body.price;
        Product.updateOne({_id:id},{$set:{price:priceUpdate}},(err,result)=>{
                if(!err){
                        if(result.nModified > 0){
                                res.send("REcord updated successfully")
                        }else {
                                res.send("Record didn't update id is wrong");        
                        }
                }else {
                        console.log("Error Generate "+err);
                }
        })       
}

//{_id:104,pname:"Mobile",price:52000}
let storeProductDetails= (req,res)=> {
                let product = req.body;
                Product.insertMany(product,(err,result)=> {
                        if(!err){
                                console.log(result);
                                res.send("Record inserted successfully ")
                        }else {
                                res.send("Error generated "+err);
                        }
                })
}

let deleteProductById = (req,res)=> {
        let pid = req.params.pid;
        Product.deleteOne({_id:pid},(err,result)=> {
                if(!err){
                        if(result.deletedCount>0){
                              res.send("Record deleted successfully")          
                        }else {
                                res.send("Record is not present")
                        }
                }else {
                       res.send("Error generated "+e);         
                }
        })
}

let getProductById=(req,res)=> {
        let pid = req.params.pid;
        Product.findById({_id:pid},(err,result)=> {
                if(!err){
                        if(result==null){
                                res.send({"msg":"Record not present"})
                        }else {
                                res.send(result);
                        }
                }else {
                        res.send("Error generated "+err);
                }
        })
}

module.exports={getProductById,getProductDetails,updateProductPrice,storeProductDetails,deleteProductById};