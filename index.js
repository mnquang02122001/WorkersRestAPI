const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/db');
let routes = require('./route/workerRoutes'); //importing route

// create express app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// define port to run express app
const port = process.env.PORT || 5000;

// Add endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});
routes(app);
// Listen to server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
