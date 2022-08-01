const express = require('express');
const { ErrorHandler } = require('../../middleware/error.handler');
const router = express.Router();
const farmerController = require('./../../controller/farmer.controller')
const milkDeliveryController = require('./../../controller/milkDelivery.controller')

router.post('/volume_delivered', (req, res) => {
    // #swagger.path = '/api/v1/volume_delivered'
    // #swagger.tags = ['Queries']
    // #swagger.summary = 'Daily volume and monthly average'
    // #swagger.description = 'Consultation of the daily volume and monthly average'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                filters: {
                    farmer: '62e5c141bd79af5be3dc6119',
                    month: 'MM/YYYY',
                }
            }
    }*/
    farmerController.volumeDelivered(req.body.filters, res)
    .then(data => res.status(201).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});
router.post('/milk_deliveries_paid_per_month', (req, res) => {
    // #swagger.path = '/api/v1/milk_deliveries_paid_per_month'
    // #swagger.tags = ['Queries']
    // #swagger.summary = 'Monthly paid amount to farmer'
    // #swagger.description = 'Consultation of the amount paid per month'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                filters: {
                    farmer: '62e5c141bd79af5be3dc6119',
                    year: 2022,
                }
            }
    }*/
    milkDeliveryController.milkDeliveriesPaidPerMonth(req.body.filters, res)
    .then(data => res.status(201).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

//

module.exports = router;