const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = require('./../Multer/Multer')
const ProductModel = require('./../Database Models/ProductModel')


router.post('/register', upload.array('image'), async(req,res) => {

    // if (req.files.length > 5){
    //     res.sendStatus(400);
    // }
    let a = [];
    // console.log(req.files)
    for(let i=0; i<req.files.length; i++){
        a.push(req.files[i].filename)
    }
    try{
            await ProductModel.create({
                name: req.body.name,
                desc: req.body.desc,
                qty: req.body.qty,
                image: a,
                author: req.body.author
            })
            console.log('New Product Created Successfully')
            res.sendStatus(201)
    }
    catch(err){
        console.log(err);
        res.sendStatus(400)
    }
})

router.get('/get', async(req,res) => {
    try{
        const temp = await ProductModel.find()
        console.log(temp, 'Product Get Request was Successfull');
        res.send(temp).status(200)
    }
    catch(err){
        console.log(err)
    }
})

router.post('/find', async(req,res) => {
    try{
        console.log(req.body)
        const response = await ProductModel.find({_id : req.body.id})
        console.log(response,'Product Finded Successfully')
        res.send(response).status(200)
    }
    catch(err){
        console.log(err);
    }
})

router.patch('/delete', async(req,res) => {
    try{
        // await ProductModel.updateOne({ _id: req.body.id }, { $pull: file[0] });
        console.log('Image To Be Deleted: ',req.body.id,req.body)
        await ProductModel.updateOne(
            { _id: req.body.id },
            { $pull:  {file: req.body.image}  }
          );

        console.log('Image Deleted Successfully');
        res.sendStatus(200)
    }
    catch(err){
        console.log(err)
        res.sendStatus(404)
    }
})

module.exports = router;