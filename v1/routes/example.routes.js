const express = require("express");
const { ErrorHandler } = require("../../middleware/error.handler");
const router = express.Router();
const exampleController = require('./../../controller/example.controller')

router.get('/examples', (req, res) => {
    exampleController.getExamples(req, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// add new
router.post('/example', (req, res) => {
    console.log(req.body);
    exampleController.createExample(req.body.example, res)
    .then(data => res.status(201).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

// edit
router.put('/example', (req, res) => {
    exampleController.updateExample(req.body, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

router.delete('/example/:id', (req, res) => {
    exampleController.deleteExample(req.params.id, res)
    .then(data => res.status(200).json(data))
    .catch((error) => { ErrorHandler(error, req, res)});
});

module.exports = router;