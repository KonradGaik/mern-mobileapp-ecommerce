const express = require('express');
const {Category} = require('../models/category');
const router = express.Router();

router.get(`/`, async(req,res) =>{
    const categoryList = await Product.find();
    if(!categoryList){
        res.status(500).json({success: false})
    }
    res.send(categoryList);
})

router.get('/:id', async(req,res) =>{
    const category = await Category.findById(req.params.id);
    if(!category){
        res.status(500).json({message: 'The category with given ID was not found.'})
    }
    res.status(200).send(Category);
})

// router.post(`/`, (req,res) => {
//    const category = new Category({
//       name: req.body.name,
//       image: req.body.image,
//       countInStock: req.body.countInStock
//    })
//    category.save().then((createdCategory => {
//        res.status(201).json(createdCategory)
//        })).catch((err)=>{
//         res.status(500).json({
//             error: err,
//             success: false
//         })
//    });
// })

router.post('/', async (req,res)=>{
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    })
    category = await category.save();

    if(!category) return res.status(404).send('the category cannot be created!');
    
    res.send(category);
})

router.put('/:id', async (req,res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name : req.body.name,
            icon : req.body.icon || category.icon,
            color : req.body.color
        },
        { new: true}
    )
    if(!category) return res.status(400).send('the category cannot be updated');
    res.send(category);
})

// REMOVE CATEGORY FROM DATABASE
router.delete('/:id',(req,res)=>{
    Category.findByIdAndRemove(req.params.id).then(category => {
        if(category){
        return res.status(200).json({success: true, message: 'the category is deleted'})
        } else {
            return res.status(404).json({success:false, message: 'nothing deleted! '})
        }
    }).catch(err => {
        return res.status(400).json({success:false, error: err})
    })
})

module.exports = router;