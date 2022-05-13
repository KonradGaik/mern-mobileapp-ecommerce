const Product = require('./models/product');
const Order = require('./models/order');
const Category = require('./models/category');
const User = require('./models/user');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');



app.use(cors());
app.options('*', cors());

const api = process.env.API_URL;
//ROUTERS
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
//MIDDLEWARE
app.use(express.json());
app.use(morgan('tiny'));
app.use('public/uploads', express.static(__dirname + 'public/uploads'));

app.use(`${api}/products`,productsRouter);
app.use(`${api}/users`,usersRouter);
app.use(`${api}/categories`,categoriesRouter);
app.use(`${api}/orders`,ordersRouter);

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ecommerce'
}).then(() => {
    console.log('Database connection is ready')
}).catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log(api);
    console.log('server is running now http://localhost:3000');
});