const { connect, disconnect } = require('../config/db.config');
const { Farm } = require('../model/farm.model');
const logger = require('../logger/api.logger');

class FarmRepository {

    constructor() {
        connect();
    }

    async getFarms() {
        const farms = await Farm.find({}).populate('farmers');
        console.log('farms:::', farms);
        return farms;
    }

    async createFarm(farm) {
        let data = {};
        try {
            data = await Farm.create(farm);
            return data;
        } catch(err) {
            logger.error('Error::' + err);
            throw err
        }
    }

    async updateFarm(args) {
        let data = {};
        try {
            if (!args.filter || !args.update) {
                throw new Error('Filter and update are required!')
            } else {
                data = await Farm.updateOne(args.filter, args.update, args.options || {});
                return data;
            }
        } catch(err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

    async deleteFarm(farmId) {
        let data = {};
        try {
            data = await Farm.deleteOne({_id : farmId});
            return data;
        } catch(err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

}

module.exports = new FarmRepository();