const mongoose = require('mongoose');
const { connect, disconnect } = require('../config/db.config');
const { MilkDelivery } = require('../model/milkDelivery.model');
const logger = require('../logger/api.logger');

class MilkDeliveryRepository {

    constructor() {
        connect();
    }

    async getMilkDeliveries() {
        const milkDeliveries = await MilkDelivery.find({}).populate('farmer').populate('price').populate('farm');
        console.log('milkDeliveries:::', milkDeliveries);
        return milkDeliveries;
    }

    async milkDeliveriesPaidPerMonth(filters) {
        let _dtStart = new Date(`01/01/${filters.year}`)
        let _dtEnd = new Date(`12/31/${filters.year}`)
        const milkDeliveries = await MilkDelivery.aggregate([
            {
                $match: {
                    $and: [
                        { farmer: new mongoose.Types.ObjectId(filters.farmer) },
                        { date: { $lte: new Date(_dtEnd) } },
                        { date: { $gte: new Date(_dtStart) } },
                    ]
                }
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$date" },
                        month: { $month: "$date" }
                    },
                    total_paid: { $sum: "$due_amount" }
                }
            }
        ]).exec()
        console.log('milkDeliveries:::', milkDeliveries);
        let _result = milkDeliveries.map((v) => ({
            month: `${v._id.month}/${v._id.year}`,
            total_paid: {
                value: v.total_paid,
                BRL: v.total_paid.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                USD: v.total_paid.toLocaleString('en-us', {style: 'currency', currency: 'USD'}),
            }
        }))
        return _result;
    }

    async createMilkDelivery(milkDelivery) {
        let data = {};
        try {
            data = await MilkDelivery.create(milkDelivery);
            return data;
        } catch (err) {
            logger.error('Error::' + err);
            throw err
        }
    }

    async updateMilkDelivery(args) {
        let data = {};
        try {
            if (!args.filter || !args.update) {
                throw new Error('Filter and update are required!')
            } else {
                data = await MilkDelivery.updateOne(args.filter, args.update, args.options || {});
                return data;
            }
        } catch (err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

    async deleteMilkDelivery(milkDeliveryId) {
        let data = {};
        try {
            data = await MilkDelivery.deleteOne({ _id: milkDeliveryId });
            return data;
        } catch (err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

}

module.exports = new MilkDeliveryRepository();