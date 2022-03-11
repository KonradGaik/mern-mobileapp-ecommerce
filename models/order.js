const mongoose = require('mongoose');
const { User } = require('./user');
const orderSchema = mongoose.Schema({
    orderItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required: true
    }],
    shippingAddress1: {
        type:String,
        required: true
    },
    shippingAddress2: {
        type:String,
    },
    city: {
        type:String,
        required: true
    },
    zipCode: {
        type:String,
        required: true
    },
    country: {
        type:String,
        required: true
    },
    phone: {
        type:Number,
        required: true
    },
    status: {
        type:String,
        default: 'Pending',
        required: true
    },
    totalPrice: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    dataOrdered: {
        type:Date,
        default: Date.now
    }
})

orderSchema.virtual('id').get(function() {
    return this._id.thoHexString();
});

orderSchema.set('toJSON', {
    virutals:true,
});

exports.Order = mongoose.model('Order', orderSchema);