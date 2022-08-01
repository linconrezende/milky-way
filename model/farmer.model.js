const mongoose = require('mongoose');
const { Farm } = require('../model/farm.model');

const farmerSchema = new mongoose.Schema({
    name :{
        type:String,
        required: '{PATH} is required!'
    },
    farm: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'farms',
        validate: {
            validator: function (val) {
                return new Promise(async (resolve) => {
                    let _farm = await Farm.findOne({_id: val});
                    resolve(_farm && _farm._id ? true : false)
                });
            },
            message: 'You must provide a valid farm id'
        },
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