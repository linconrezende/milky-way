const express = require('express');
const { ErrorHandler } = require('../../middleware/error.handler');
const router = express.Router();
const farmController = require('./../../controller/farm.controller')

router.get('/farms', (req, res) => {
    // #swagger.path = '/api/v1/farms'
    // #swagger.tags = ['Farms']
    // #swagger.summary = 'List farms'
    // #swagger.description = 'List some farms'
    farmController.getFarms(req, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// add new
router.post('/farm', (req, res) => {
    // #swagger.path = '/api/v1/farm'
    // #swagger.tags = ['Farms']
    // #swagger.summary = 'Add new farm'
    // #swagger.description = 'Add new farm'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                farm: {
                    name: 'string'
                }
            }
    }*/
    console.log(req.body);
    farmController.createFarm(req.body.farm, res)
    .then(data => res.status(201).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// edit
router.put('/farm', (req, res) => {
    // #swagger.path = '/api/v1/farm'
    // #swagger.tags = ['Farms']
    // #swagger.summary = 'Update an farm'
    // #swagger.description = 'Update an farm. See documentation: https://mongoosejs.com/docs/api.html#query_Query-updateOne'
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
    farmController.updateFarm(req.body, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

router.delete('/farm/:id', (req, res) => {
    // #swagger.path = '/api/v1/farm/{id}'
    // #swagger.tags = ['Farms']
    farmController.deleteFarm(req.params.id, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

module.exports = router;