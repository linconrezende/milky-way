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
}
module.exports = new FarmerController();