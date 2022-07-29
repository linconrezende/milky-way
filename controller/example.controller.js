const exampleService  = require('../service/example.service');
const logger = require('../logger/api.logger');

class ExampleController {

    async getExamples() {
        logger.info('Controller: getExamples')
        // todo: paginate
        return await exampleService.getExamples();
    }

    async createExample(example) {
        logger.info('Controller: createExample', example);
        return await exampleService.createExample(example);
    }

    async updateExample(args) {
        logger.info('Controller: updateExample', args);
        return await exampleService.updateExample(args);
    }

    async deleteExample(exampleId) {
        logger.info('Controller: deleteExample', exampleId);
        return await exampleService.deleteExample(exampleId);
    }
}
module.exports = new ExampleController();