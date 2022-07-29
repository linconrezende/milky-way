const exampleRepository  = require('../repository/example.repository');

class ExampleService {

    constructor() {}

    async getExamples() {
        return await exampleRepository.getExamples();
    }

    async createExample(example) {
        return await exampleRepository.createExample(example);
    }

    async updateExample(args) {
        return await exampleRepository.updateExample(args);
    }

    async deleteExample(exampleId) {
        return await exampleRepository.deleteExample(exampleId);
    }

}

module.exports = new ExampleService();