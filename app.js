const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const productSchema = mongoose.Schema({
    name: String, 
    image: String,
    countInStock: Number
})

const Product = mongoose.model('Product', productSchema);

const morgan = require('morgan');
const api = process.env.API_URL;
//MIDDLEWARE
app.use(express.json());
app.use(morgan('tiny'));
app.get(`${api}/products`, (req,res) => {
   const product = new Product({
      name: req.body.name,
      image: req.body.image,
      countInStock: req.body.countInStock
   })
   product.save().then((createProduct => {
       res.status(201).json(createProduct).catch((err)=>{
           res.status(500).json({
               error: err,
               success: false
           })
       })
   }));
    res.send(newProduct);
})

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ecommerce'
}).then(() => {
    console.log('Database connection is ready')
}).catch((err) => {
    console.log(err);
})

app.listen(3300, () => {
    console.log(api);
    console.log('server is running now http://localhost:3300');
});