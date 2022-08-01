const path = require('path');
console.log(process.argv)

const version = process.argv && process.argv[2] && process.argv[2].indexOf('v') == 0 ? process.argv[2] : 'v1'
const swaggerAutogen = require('swagger-autogen')();
const outputFile = `./routes/${version}/swagger.json`;
console.log(path.join(__dirname, 'server.js'))
const endpointsFiles = [
  `./routes/${version}/example.routes.js`,
  `./routes/${version}/farm.routes.js`,
  `./routes/${version}/farmer.routes.js`,
  `./routes/${version}/price.routes.js`,
  `./routes/${version}/milkDelivery.routes.js`,
  `./routes/${version}/query.routes.js`
];
swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require('./server.js'); // Your project's root file
});