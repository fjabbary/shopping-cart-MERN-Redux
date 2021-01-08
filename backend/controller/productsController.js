const Product = require('../models/Product')

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({})
        res.json(allProducts)
        console.log("Got all Products")

    } catch (error) {
        // res.status(500).json({ message: "Fail to all Products" })
        console.log("Fail to all Products")
    }
}

const getProductById = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id)
        res.json(product)

    } catch (error) {
        res.status(500).json({ message: "Fail to get one Product" })
        console.log("Fail to get one Products")
    }
}

module.exports = {
    getAllProducts,
    getProductById
}