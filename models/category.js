const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    name: {type: String,
           required: true }, 
    icon: {
        type: String
    },
    color: {
        type: String
    }
});

categorySchema.virtual('id').get(function() {
    return this._id.thoHexString();
});

categorySchema.set('toJSON', {
    virutals:true,
});


exports.Category = mongoose.model('Category', categorySchema);