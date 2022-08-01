const mongoose = require('mongoose');
const priceSchema = new mongoose.Schema({
    date_from: {
        type: 'date',
        required: [true, 'Must provide a date']
    },
    date_to: {
        type: 'date',
        required: [true, 'Must provide a date']
    },
    price_base: {
        type: 'number',
        required: [true, 'Must provide a price_base']
    },
    cost_per_km_min: {
        type: 'number',
        required: [true, 'Must provide a cost_per_km_min']
    },
    cost_per_km_max: {
        type: 'number',
        required: [true, 'Must provide a cost_per_km_max']
    },
    price_bonus_production: {
        type: 'number',
        required: [true, 'Must provide a price_bonus_production']
    },
    distance_min: {
        type: 'number',
        required: [true, 'Must provide a distance_min']
    },
    distance_max: {
        type: 'number',
        required: [true, 'Must provide a distance_max']
    },
    volume_bonus_production: {
        type: 'number',
        required: [true, 'Must provide a volume_bonus_production']
    },
    createDate: 'date',
    updatedDate: 'date',
    createdBy: 'string',
    updatedBy: 'string'
},
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at' } }
);

priceSchema.virtual('milk_deliveries',
    {
        ref: 'milkDeliveries',
        localField: '_id',
        foreignField: 'price',
        justOne: false
    }
);
priceSchema.set('toObject', { virtuals: true })
priceSchema.set('toJSON', { virtuals: true })

const Price = mongoose.model('prices', priceSchema);

module.exports = {
    Price
}