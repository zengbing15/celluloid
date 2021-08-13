const express = require('express');
const router =express.Router();

router.post('/',(req,res)=>{
    const {address} = req.body;
    if(address){
        return res.status(200).send(`Welcome ${address}`);
    }
    res.status(401).send('Please Provide Credentials');
});

module.exports =router;
