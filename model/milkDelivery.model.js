const mongoose = require('mongoose');
const { Price } = require('../model/price.model');
const { Farmer } = require('../model/farmer.model');

const milkDeliverySchema = new mongoose.Schema({
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'farmers',
        validate: {
            validator: function (val) {
                return new Promise(async (resolve) => {
                    let _obj = await Farmer.findOne({_id: val});
                    resolve(_obj && _obj._id ? true : false)
                });
            },
            message: 'You must provide a valid farmer id'
        },
    },
    farm: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'farms'
    },
    volume:{
        type: 'number',
        required: '{PATH} is required (in liters)!'
    },
    price: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'prices'
    },
    due_amount: {
        type: 'number'
    },
    date: {
        type: 'date',
        required: '{PATH} is required (MM/DD/YYYY hh:mm)!'
    },
    paid_amount: 'number',
    createDate: 'date',
    updatedDate: 'date',
    createdBy: 'string',
    updatedBy: 'string' },
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}}
);


milkDeliverySchema.pre('save', async function(next) {
    try {
        // calculate due_amount
        const P = await Price.findOne({$and: [
            {date_from: { $lte: new Date(this.date) }},
            {date_to: { $gte: new Date(this.date) }},
        ]})
        if (!P || !P._id) {
            throw new Error('Price not found for this date')
        }
        const FARMER = await Farmer.findOne({_id: this.farmer}).populate('farm')
        const FARM = FARMER.farm
        this.farm = FARM._id
        this.price = P._id

        let _base_price = this.volume * P.price_base
        let _distanceCost = (FARM.distance >= P.distance_min && FARM.distance <= P.distance_max) ? (P.cost_per_km_min || 0) : (P.cost_per_km_max || 0)
        let _bonus = P.volume_bonus_production && this.volume > P.volume_bonus_production ? this.volume * P.price_bonus_production : 0
        let _due_amount = _base_price - (_distanceCost * FARM.distance) + _bonus
        this.due_amount = _due_amount
        next();
    } catch (error) {
        next(error)
    }
});

const MilkDelivery = mongoose.model('milkDeliveries', milkDeliverySchema);

module.exports = {
    MilkDelivery
}