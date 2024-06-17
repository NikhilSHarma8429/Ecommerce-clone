const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ecommerce-clone').then(() =>[
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