const mongoose = require('mongoose')
require('dotenv').config()

let username = process.env.DB_USERNAME;
let password = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@ecommerce-clone.xv9ngwh.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-clone`).then(() =>[
    console.log('DataBase Connected')
]).catch((err) => {
    console.log(err)
})

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    desc:{
        type: String
    },
    qty:{
        type: Number
    },
    image:[{
        type: String
    }],
    author:{
        type: String
    }
})

const ProductModel = new mongoose.model("Products", ProductSchema);

module.exports = ProductModel;