const mongoose = require('mongoose');
const farmSchema = new mongoose.Schema({
    name :{
        type:String,
        required: '{PATH} is required!'
    },
    createDate: 'date',
    updatedDate: 'date',
    createdBy: 'string',
    updatedBy: 'string' },
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}}
);

farmSchema.virtual('farmers',
    {
        ref: 'farmers',
        localField: '_id',
        foreignField: 'farm',
        justOne: false
    }
);
farmSchema.set('toObject', { virtuals: true })
farmSchema.set('toJSON', { virtuals: true })

const Farm = mongoose.model('farms', farmSchema);

module.exports = {
    Farm
}