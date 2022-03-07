const express = require('express');
const {User} = require('../models/user');
const router = express.Router();

router.get(`/`, async(req,res) =>{
    const userList = await User.find();
    if(!userList){
        res.status(500).json({success: false})
    }
    res.send(userList);
})

router.post('/', async (req,res)=>{
    let user = new User({
        name: res.body.name,
        email: res.body.email,
        passwordHash: res.body.passwordHash,
        phone: res.body.phone,
        street: res.body.street,
        apartment: res.body.apartment,
        country: res.body.country,
        zipCode: res.body.zipCode,
        isAdmin: res.body.isAdmin,
        city: res.body.city
    })
    user = await user.save();

    if(!user) return res.status(404).send('the category cannot be created!');
    
    res.send(user);
})

module.exports = router;