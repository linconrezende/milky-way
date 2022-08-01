const { connect, disconnect } = require('../config/db.config');
const { Price } = require('../model/price.model');
const logger = require('../logger/api.logger');

class PriceRepository {

    constructor() {
        connect();
    }

    async getPrices() {
        const prices = await Price.find({});
        console.log('prices:::', prices);
        return prices;
    }

    async createPrice(price) {
        let data = {};
        try {
            data = await Price.create(price);
            return data;
        } catch(err) {
            logger.error('Error::' + err);
            throw err
        }
    }

    async updatePrice(args) {
        let data = {};
        try {
            if (!args.filter || !args.update) {
                throw new Error('Filter and update are required!')
            } else {
                data = await Price.updateOne(args.filter, args.update, args.options || {});
                return data;
            }
        } catch(err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

    async deletePrice(priceId) {
        let data = {};
        try {
            data = await Price.deleteOne({_id : priceId});
            return data;
        } catch(err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

}

module.exports = new PriceRepository();