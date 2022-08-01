const { connect, disconnect } = require('../config/db.config');
const { Farmer } = require('../model/farmer.model');
const logger = require('../logger/api.logger');

class FarmerRepository {

    constructor() {
        connect();
    }

    async getFarmers() {
        const farmers = await Farmer.find({}).populate({ path: 'farm', model: 'farms' });
        console.log('farmers:::', farmers);
        return farmers;
    }

    async createFarmer(farmer) {
        let data = {};
        try {
            data = await Farmer.create(farmer);
            return data;
        } catch(err) {
            logger.error('Error::' + err);
            throw err
        }
    }

    async updateFarmer(args) {
        let data = {};
        try {
            if (!args.filter || !args.update) {
                throw new Error('Filter and update are required!')
            } else {
                data = await Farmer.updateOne(args.filter, args.update, args.options || {});
                return data;
            }
        } catch(err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

    async deleteFarmer(farmerId) {
        let data = {};
        try {
            data = await Farmer.deleteOne({_id : farmerId});
            return data;
        } catch(err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

}

module.exports = new FarmerRepository();