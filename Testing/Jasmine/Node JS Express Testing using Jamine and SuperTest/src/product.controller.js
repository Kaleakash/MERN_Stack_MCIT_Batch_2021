let ProductModel = require("./product.model");

let getAllProducts = (req,res)=> {
        ProductModel.find({},(err,doc)=> {
            if(!err){
                res.json(doc);
            }
        })
}

module.exports={getAllProducts}