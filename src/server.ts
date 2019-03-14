const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

const SERVER_PORT = 3000;
const routes = require('./routes/base');


// ----------------- middleware configuration -------------------------
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
// ----------------- end middlerware config   -------------------------

app.use('/', routes);

app.listen(SERVER_PORT, function () {
  console.log('Server started on ' + SERVER_PORT);
});

module.exports = app;

