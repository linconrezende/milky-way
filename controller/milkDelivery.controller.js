const milkDeliveryService  = require('../service/milkDelivery.service');
const logger = require('../logger/api.logger');

class MilkDeliveryController {

    async getMilkDeliveries() {
        logger.info('Controller: getMilkDeliveries')
        // todo: paginate
        return await milkDeliveryService.getMilkDeliveries();
    }

    async milkDeliveriesPaidPerMonth(filters) {
        logger.info('Controller: milkDeliveriesPaidPerMonth')
        // todo: paginate
        return await milkDeliveryService.milkDeliveriesPaidPerMonth(filters);
    }

    async createMilkDelivery(milkDelivery) {
        logger.info('Controller: createMilkDelivery', milkDelivery);
        return await milkDeliveryService.createMilkDelivery(milkDelivery);
    }

    async updateMilkDelivery(args) {
        logger.info('Controller: updateMilkDelivery', args);
        return await milkDeliveryService.updateMilkDelivery(args);
    }

    async deleteMilkDelivery(milkDeliveryId) {
        logger.info('Controller: deleteMilkDelivery', milkDeliveryId);
        return await milkDeliveryService.deleteMilkDelivery(milkDeliveryId);
    }
}
module.exports = new MilkDeliveryController();