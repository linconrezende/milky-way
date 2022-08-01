require('dotenv').config()
const express = require('express');
// v1
const v1_swaggerFile = require('./routes/v1/swagger.json');
const v1_ExamplesRouter = require('./routes/v1/example.routes');
const v1_FarmsRouter = require('./routes/v1/farm.routes');
const v1_FarmersRoute = require('./routes/v1/farmer.routes');
const v1_PricesRouter = require('./routes/v1/price.routes');
const v1_MilkDeliveriesRoute = require('./routes/v1/milkDelivery.routes');

const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/swagger/v1', swaggerUi.serve, swaggerUi.setup(v1_swaggerFile));
app.use("/api/v1", v1_ExamplesRouter);
app.use("/api/v1", v1_FarmsRouter);
app.use("/api/v1", v1_FarmersRoute);
app.use("/api/v1", v1_PricesRouter);
app.use("/api/v1", v1_MilkDeliveriesRoute);

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})