const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    name :{
        type:String,
        required: '{PATH} is required!'
    },
    farm: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'farms',
        required: '{PATH} is required!'
    },
    createDate: 'date',
    updatedDate: 'date',
    createdBy: 'string',
    updatedBy: 'string' },
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}}
);

const Farmer = mongoose.model('farmers', farmerSchema);

module.exports = {
    Farmer
}