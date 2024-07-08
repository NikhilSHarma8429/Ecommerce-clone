const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

let username = process.env.DB_USERNAME;
let password = process.env.DB_PASSWORD;


mongoose.connect(`mongodb+srv://${username}:${password}@ecommerce-clone.xv9ngwh.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-clone`)
    .then(() => {
        console.log('Database Connected Successfully')
    })
    .catch((err) => {
        console.log(err)
    })

const LoginSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const LoginModel = mongoose.model("credentials", LoginSchema)

module.exports = LoginModel