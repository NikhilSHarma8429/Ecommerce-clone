const mongoose = require('mongoose')
const express = require('express')
const MainRoutes = require('./Routes/MainRoutes')
const ProductRoutes = require('./Routes/ProductRoutes')
const app = express()

app.use(express.json())

app.use('/', MainRoutes);
app.use('/product', ProductRoutes);


app.listen(3000, () => {
    console.log('server running at http://localhost:3000')
})