//load the module 
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

// create express reference 
let app = express();

//middleware 
app.use(bodyParser.urlencoded({extended:true})) //enable body part part data from req
app.use(bodyParser.json());                 // enable the json data.  
app.use(cors());            //enable cors origin features 

//Initial Data 
let products = [
    {"pid":100,"pname":"Tv","price":120000},
    {"pid":101,"pname":"Computer","price":55000}
]

//coding 

//Display all product details
app.get("/allProducts",(req,res)=> {
    res.json(products);
})

//Display all product details using id 
app.get("/getProductDetailsById/:pid",(req,res)=> {
        let pid = req.params.pid;
        let result = products.find(p=>p.pid == pid);
        if(result == undefined){
            res.send("Product details are not available with id as "+pid)
        }else {
            res.send(result);       // return product object 
            //res.send("Price is "+result.price);
        }
})

//Store product details 
app.post("/storeProductDetails",(req,res)=> {
        let pid = req.body.pid;
        let result = products.find(p=>p.pid == pid);
        if(result== undefined){
              products.push(req.body);
              res.send("record stored successfully....")  
        }else {
              res.send("Product id must be unique "+pid);
        }
})

//Delete product details using pid 
app.delete("/deleteProductById/:pid",(req,res)=> {
        let pid = req.params.pid;
        let index  = products.findIndex(p=>p.pid==pid);
        if(index >= 0){
                products.splice(index,1);
                res.send("Record deleted successfully with pid as "+pid);
        }else {
                res.send("Record is not available with pid is "+pid);
        }
})

//Update product price using pid 
app.put("/updateProductPriceById",(req,res)=> {
    let pid = req.body.pid;
    let price = req.body.price;
    let index = products.findIndex(p=>p.pid==pid);
    if(index >= 0){
            let product = products[index];
            product.price = product.price+price;
            res.send("Product price increase successfully..")
    }else {
        res.send("Record is not available with pid is "+pid);
    }
});


app.listen(9999,()=>console.log("Server running on port number 9999"))