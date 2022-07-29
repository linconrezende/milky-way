const express = require('express');
const { ErrorHandler } = require('../../middleware/error.handler');
const router = express.Router();
const exampleController = require('./../../controller/example.controller')

router.get('/examples', (req, res) => {
    // #swagger.tags = ['Examples']
    // #swagger.summary = 'List examples'
    // #swagger.description = 'List some examples'
    exampleController.getExamples(req, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// add new
router.post('/example', (req, res) => {
    // #swagger.tags = ['Examples']
    // #swagger.summary = 'Add new example'
    // #swagger.description = 'Add new example'
    console.log(req.body);
    exampleController.createExample(req.body.example, res)
    .then(data => res.status(201).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// edit
router.put('/example', (req, res) => {
    // #swagger.tags = ['Examples']
    // #swagger.summary = 'Update an example'
    // #swagger.description = 'Update an example. See documentation: https://mongoosejs.com/docs/api.html#query_Query-updateOne'
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
    exampleController.updateExample(req.body, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

router.delete('/example/:id', (req, res) => {
    // #swagger.tags = ['Examples']
    exampleController.deleteExample(req.params.id, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

module.exports = router;