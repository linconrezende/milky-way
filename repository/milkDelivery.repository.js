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

    async createMilkDelivery(milkDelivery) {
        let data = {};
        try {
            data = await MilkDelivery.create(milkDelivery);
            return data;
        } catch(err) {
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
        } catch(err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

    async deleteMilkDelivery(milkDeliveryId) {
        let data = {};
        try {
            data = await MilkDelivery.deleteOne({_id : milkDeliveryId});
            return data;
        } catch(err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

}

module.exports = new MilkDeliveryRepository();