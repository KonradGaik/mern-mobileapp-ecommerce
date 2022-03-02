const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {type: String,
           required: true }, 
    image: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    }
})

exports.User = mongoose.model('User', userSchema);