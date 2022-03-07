const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {type: String,
           required: true }, 
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    street: {
        type: String,
        default: ''
    },
    apartment: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    zipCode: {
        type: String,
        default: ''
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    country: {
        type: Boolean,
        default: ''
    }
})

userSchema.virtual('id').get(function() {
    return this._id.thoHexString();
});

userSchema.set('toJSON', {
    virutals:true,
});


exports.User = mongoose.model('User', userSchema);