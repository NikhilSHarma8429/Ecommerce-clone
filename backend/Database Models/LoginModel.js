const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ecommerce-clone')
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