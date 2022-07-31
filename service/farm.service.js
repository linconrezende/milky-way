const farmRepository  = require('../repository/farm.repository');

class FarmService {

    constructor() {}

    async getFarms() {
        return await farmRepository.getFarms();
    }

    async createFarm(farm) {
        return await farmRepository.createFarm(farm);
    }

    async updateFarm(args) {
        return await farmRepository.updateFarm(args);
    }

    async deleteFarm(farmId) {
        return await farmRepository.deleteFarm(farmId);
    }

}

module.exports = new FarmService();