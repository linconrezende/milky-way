const farmerService  = require('../service/farmer.service');
const logger = require('../logger/api.logger');

class FarmerController {

    async getFarmers() {
        logger.info('Controller: getFarmers')
        // todo: paginate
        return await farmerService.getFarmers();
    }

    async createFarmer(farmer) {
        logger.info('Controller: createFarmer', farmer);
        return await farmerService.createFarmer(farmer);
    }

    async updateFarmer(args) {
        logger.info('Controller: updateFarmer', args);
        return await farmerService.updateFarmer(args);
    }

    async deleteFarmer(farmerId) {
        logger.info('Controller: deleteFarmer', farmerId);
        return await farmerService.deleteFarmer(farmerId);
    }
    async volumeDelivered(filters) {
        if (!filters) {
            throw new Error('You must provide a filter to this query!')
        } else if (!filters.farmer) {
            throw new Error('You must provide a farmer!')
        } else if (!filters.month) {
            throw new Error('You must provide a month with a year (MM/YYYY)')
        }
        logger.info('Controller: volumeDelivered', filters);
        return await farmerService.volumeDelivered(filters);
    }
}
module.exports = new FarmerController();