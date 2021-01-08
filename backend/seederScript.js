require('dotenv').config();
const productData = require('./data/products')
const Product = require('./models/Product')
const connectDB = require('./config/db')

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(productData)
        console.log("data added successfully")

    } catch (error) {
        console.log("data NOT imported")
    }
}

importData();