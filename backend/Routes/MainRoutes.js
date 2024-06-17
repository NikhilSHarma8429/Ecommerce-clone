const express = require('express');
const router = express.Router();
const LoginModel = require('./../Database Models/LoginModel')

router.post('/register', async(req,res) => {
    try{
        await LoginModel.validate(req.body)
        const temp = await LoginModel.findOne({email: req.body.email})
        if(temp){
            console.log(temp)
            console.log("email already exists")
            res.sendStatus(403)
        }
        else{
            await LoginModel.create(req.body)
            console.log('Data Added Successfully')
            res.sendStatus(201)
        }

    }
    catch(e){
        console.log(e);
        res.sendStatus(400)
    }
})

router.post('/validate', async(req,res) => {
    try{
        await LoginModel.validate(req.body)
        console.log(req.body.email)
        const Data = await LoginModel.findOne({email: req.body.email})
        if(!Data)
            res.sendStatus(401)
        else{
            if(Data.password == req.body.password)
            {
                res.sendStatus(200)
            }
            else{
                res.sendStatus(400)
            }
        }
    }
    catch(err){
        console.log(err);
        res.sendStatus(404);
    }
})

module.exports = router;