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

farmerSchema.virtual('milk_deliveries',
    {
        ref: 'milkDeliveries',
        localField: '_id',
        foreignField: 'farmer',
        justOne: false
    }
);
farmerSchema.virtual('total_volume_delivered').get(function () {
    if (!this.milk_deliveries) {
        return undefined
    } else {
        let _sum = (this.milk_deliveries || []).reduce((sum, D) => { return sum + D.volume }, 0)
        return _sum
    }
})
farmerSchema.virtual('average_volume_delivered').get(function () {
    if (!this.milk_deliveries || !this.total_volume_delivered) {
        return undefined
    } else {
        let _avg = this.total_volume_delivered / this.milk_deliveries.length
        return _avg
    }
})
farmerSchema.virtual('total_paid').get(function () {
    if (!this.milk_deliveries) {
        return undefined
    } else {
        let _sum = (this.milk_deliveries || []).reduce((sum, D) => { return sum + D.due_amount }, 0)
        return _sum
    }
})
farmerSchema.virtual('price_per_liter').get(function () {
    if (!this.milk_deliveries || !this.total_volume_delivered || !this.total_paid) {
        return undefined
    } else {
        let _pricePerLiter = this.total_volume_delivered / this.total_paid
        return {
            value: _pricePerLiter,
            BRL: _pricePerLiter.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
            USD: _pricePerLiter.toLocaleString('en-us', {style: 'currency', currency: 'USD'}),
        }
    }
})

farmerSchema.set('toObject', { virtuals: true })
farmerSchema.set('toJSON', { virtuals: true })
const Farmer = mongoose.model('farmers', farmerSchema);

module.exports = {
    Farmer
}