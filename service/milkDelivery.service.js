const milkDeliveryRepository  = require('../repository/milkDelivery.repository');

class MilkDeliveryService {

    constructor() {}

    async getMilkDeliveries() {
        return await milkDeliveryRepository.getMilkDeliveries();
    }

    async createMilkDelivery(milkDelivery) {
        return await milkDeliveryRepository.createMilkDelivery(milkDelivery);
    }

    async updateMilkDelivery(args) {
        return await milkDeliveryRepository.updateMilkDelivery(args);
    }

    async deleteMilkDelivery(milkDeliveryId) {
        return await milkDeliveryRepository.deleteMilkDelivery(milkDeliveryId);
    }

}

module.exports = new MilkDeliveryService();