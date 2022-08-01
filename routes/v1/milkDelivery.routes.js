const express = require('express');
const { ErrorHandler } = require('../../middleware/error.handler');
const router = express.Router();
const milkDeliveryController = require('./../../controller/milkDelivery.controller')

router.get('/milkDeliveries', (req, res) => {
    // #swagger.path = '/api/v1/milkDeliveries'
    // #swagger.tags = ['MilkDeliveries']
    // #swagger.summary = 'List milkDeliveries'
    // #swagger.description = 'List some milkDeliveries'
    milkDeliveryController.getMilkDeliveries(req, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// add new
router.post('/milkDelivery', (req, res) => {
    // #swagger.path = '/api/v1/milkDelivery'
    // #swagger.tags = ['MilkDeliveries']
    // #swagger.summary = 'Add new milkDelivery'
    // #swagger.description = 'Add new milkDelivery. It must belong to a existing farm'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                milkDelivery: {
                    farmer: '62e5c141bd79af5be3dc6119',
                    volume: 15000,
                    date: 'MM/DD/YYYY hh:mm',
                }
            }
    }*/
    console.log(req.body);
    milkDeliveryController.createMilkDelivery(req.body.milkDelivery, res)
    .then(data => res.status(201).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// edit
router.put('/milkDelivery', (req, res) => {
    // #swagger.path = '/api/v1/milkDelivery'
    // #swagger.tags = ['MilkDeliveries']
    // #swagger.summary = 'Update an milkDelivery'
    // #swagger.description = 'Update an milkDelivery. See documentation: https://mongoosejs.com/docs/api.html#query_Query-updateOne'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                filter: {
                    _id: '62e41577d8e0110b58592582'
                },
                update: {
                    '$$set': {
                        'property_name': 'prop_value'
                    }
                },
                options: {}
            }
    } */
    milkDeliveryController.updateMilkDelivery(req.body, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

router.delete('/milkDelivery/:id', (req, res) => {
    // #swagger.path = '/api/v1/milkDelivery/{id}'
    // #swagger.tags = ['MilkDeliveries']
    milkDeliveryController.deleteMilkDelivery(req.params.id, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

module.exports = router;