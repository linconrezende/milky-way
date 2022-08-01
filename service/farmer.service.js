const farmerRepository  = require('../repository/farmer.repository');

class FarmerService {

    constructor() {}

    async getFarmers() {
        return await farmerRepository.getFarmers();
    }

    async createFarmer(farmer) {
        return await farmerRepository.createFarmer(farmer);
    }

    async updateFarmer(args) {
        return await farmerRepository.updateFarmer(args);
    }

    async deleteFarmer(farmerId) {
        return await farmerRepository.deleteFarmer(farmerId);
    }

    async volumeDelivered(filters) {
        return await farmerRepository.volumeDelivered(filters);
    }

}

module.exports = new FarmerService();