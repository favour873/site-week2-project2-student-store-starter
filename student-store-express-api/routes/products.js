const express = require("express")
const router = express.Router()
const productsModel = require("../models/products")

router.get("/", (request, response) => {
    const products = productsModel.data
    response.json(products)
})

router.get("/:productId", (request, response) => {
    const {productId} = request.params
    
    const product = productsModel.getProductById(parseInt(productId))
    {!product 
        ? response.status(404).json({message : "Product Not Found, Try Another ID"}) 
        : response.json(product)}

})

module.exports = router