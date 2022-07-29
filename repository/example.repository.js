const { connect, disconnect } = require('../config/db.config');
const { Example } = require('../model/example.model');
const logger = require('../logger/api.logger');

class ExampleRepository {

    constructor() {
        connect();
    }

    async getExamples() {
        const examples = await Example.find({});
        console.log('examples:::', examples);
        return examples;
    }

    async createExample(example) {
        let data = {};
        try {
            data = await Example.create(example);
            return data;
        } catch(err) {
            logger.error('Error::' + err);
            throw err
        }
    }

    async updateExample(args) {
        let data = {};
        try {
            if (!args.filter || !args.update) {
                throw new Error('Filter and update are required!')
            } else {
                data = await Example.updateOne(args.filter, args.update, args.options || {});
                return data;
            }
        } catch(err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

    async deleteExample(exampleId) {
        let data = {};
        try {
            data = await Example.deleteOne({_id : exampleId});
            return data;
        } catch(err) {
            logger.error('Error::' + err);
            throw err;
        }
    }

}

module.exports = new ExampleRepository();