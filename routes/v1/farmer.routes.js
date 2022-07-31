const express = require('express');
const { ErrorHandler } = require('../../middleware/error.handler');
const router = express.Router();
const farmerController = require('./../../controller/farmer.controller')

router.get('/farmers', (req, res) => {
    // #swagger.path = '/api/v1/farmers'
    // #swagger.tags = ['Farmers']
    // #swagger.summary = 'List farmers'
    // #swagger.description = 'List some farmers'
    farmerController.getFarmers(req, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// add new
router.post('/farmer', (req, res) => {
    // #swagger.path = '/api/v1/farmer'
    // #swagger.tags = ['Farmers']
    // #swagger.summary = 'Add new farmer'
    // #swagger.description = 'Add new farmer. It must belong to a existing farm'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                farmer: {
                    name: 'string',
                    farm: '62e5c141bd79af5be3dc6119'
                }
            }
    }*/
    console.log(req.body);
    farmerController.createFarmer(req.body.farmer, res)
    .then(data => res.status(201).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// edit
router.put('/farmer', (req, res) => {
    // #swagger.path = '/api/v1/farmer'
    // #swagger.tags = ['Farmers']
    // #swagger.summary = 'Update an farmer'
    // #swagger.description = 'Update an farmer. See documentation: https://mongoosejs.com/docs/api.html#query_Query-updateOne'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                filter: {
                    _id: '62e41577d8e0110b58592582'
                },
                update: {
                    '$$set': {
                        'name': 'test3_edit'
                    }
                },
                options: {}
            }
    } */
    farmerController.updateFarmer(req.body, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

router.delete('/farmer/:id', (req, res) => {
    // #swagger.path = '/api/v1/farmer/{id}'
    // #swagger.tags = ['Farmers']
    farmerController.deleteFarmer(req.params.id, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

module.exports = router;