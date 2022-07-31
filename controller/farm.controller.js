const farmService  = require('../service/farm.service');
const logger = require('../logger/api.logger');

class FarmController {

    async getFarms() {
        logger.info('Controller: getFarms')
        // todo: paginate
        return await farmService.getFarms();
    }

    async createFarm(farm) {
        logger.info('Controller: createFarm', farm);
        return await farmService.createFarm(farm);
    }

    async updateFarm(args) {
        logger.info('Controller: updateFarm', args);
        return await farmService.updateFarm(args);
    }

    async deleteFarm(farmId) {
        logger.info('Controller: deleteFarm', farmId);
        return await farmService.deleteFarm(farmId);
    }
}
module.exports = new FarmController();