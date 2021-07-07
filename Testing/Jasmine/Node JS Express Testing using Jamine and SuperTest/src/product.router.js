let express = require("express");
let router = express.Router();
let ProductController = require("./product.controller");

router.get("/allProduct",ProductController.getAllProducts);

module.exports=router;
