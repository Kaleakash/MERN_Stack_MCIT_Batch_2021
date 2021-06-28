let ProductController = require("../controller/product.controller");
//load the expres module 
let express = require("express");
let router = express.Router();  //it provide router reference 
                                // which help to pass the 
                                // request to controller 

// match sub path and http methods and call controller methods. 
router.get("/getAllProducts",ProductController.getProductDetails);
router.get("/getProductById/:pid",ProductController.getProductById);
router.put("/updatePriceUsingId",ProductController.updateProductPrice)
router.post("/createProduct",ProductController.storeProductDetails);
router.delete("/deleteProductUsingId/:pid",ProductController.deleteProductById);


module.exports=router;
