const express = require('express');
require('dotenv').config()

const v1_ExamplesRouter = require('./v1/routes/example.routes');

const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/v1", v1_ExamplesRouter);

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})