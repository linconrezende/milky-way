const express = require('express');
const { ErrorHandler } = require('../../middleware/error.handler');
const router = express.Router();
const priceController = require('./../../controller/price.controller')

router.get('/prices', (req, res) => {
    // #swagger.path = '/api/v1/prices'
    // #swagger.tags = ['Prices']
    // #swagger.summary = 'List prices'
    // #swagger.description = 'List some prices'
    priceController.getPrices(req, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// add new
router.post('/price', (req, res) => {
    // #swagger.path = '/api/v1/price'
    // #swagger.tags = ['Prices']
    // #swagger.summary = 'Add new price'
    // #swagger.description = 'Add new price'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                price: {
                    date_from: '01/01/2022',
                    date_to: '06/31/2022',
                    price_base: 1.8,
                    cost_per_km_min: 0.05,
                    cost_per_km_max: 0.06,
                    price_bonus_production: 0,
                    distance_min: 0,
                    distance_max: 50,
                    volume_bonus_production: 10000,
                }
            }
    }*/
    console.log(req.body);
    priceController.createPrice(req.body.price, res)
    .then(data => res.status(201).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// edit
router.put('/price', (req, res) => {
    // #swagger.path = '/api/v1/price'
    // #swagger.tags = ['Prices']
    // #swagger.summary = 'Update an price'
    // #swagger.description = 'Update an price. See documentation: https://mongoosejs.com/docs/api.html#query_Query-updateOne'
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
    priceController.updatePrice(req.body, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

router.delete('/price/:id', (req, res) => {
    // #swagger.path = '/api/v1/price/{id}'
    // #swagger.tags = ['Prices']
    priceController.deletePrice(req.params.id, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

module.exports = router;