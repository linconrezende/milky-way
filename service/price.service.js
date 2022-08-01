const priceRepository  = require('../repository/price.repository');

class PriceService {

    constructor() {}

    async getPrices() {
        return await priceRepository.getPrices();
    }

    async createPrice(price) {
        return await priceRepository.createPrice(price);
    }

    async updatePrice(args) {
        return await priceRepository.updatePrice(args);
    }

    async deletePrice(priceId) {
        return await priceRepository.deletePrice(priceId);
    }

}

module.exports = new PriceService();