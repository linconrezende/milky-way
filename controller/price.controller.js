const priceService  = require('../service/price.service');
const logger = require('../logger/api.logger');

class PriceController {

    async getPrices() {
        logger.info('Controller: getPrices')
        // todo: paginate
        return await priceService.getPrices();
    }

    async createPrice(price) {
        logger.info('Controller: createPrice', price);
        return await priceService.createPrice(price);
    }

    async updatePrice(args) {
        logger.info('Controller: updatePrice', args);
        return await priceService.updatePrice(args);
    }

    async deletePrice(priceId) {
        logger.info('Controller: deletePrice', priceId);
        return await priceService.deletePrice(priceId);
    }
}
module.exports = new PriceController();