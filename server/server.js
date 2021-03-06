const cron = require('node-cron');
const axios = require('axios');
const express = require('express');
const pool = require('./modules/pool');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const sensorDataForm = require('./routes/sensor.router');
const notesRouter = require('./routes/notes.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/sensor', sensorDataForm);
app.use('/api/notes', notesRouter);
// Serve static files
app.use(express.static('build'));

//device connection
// Make a request for data every 30 minutes
cron.schedule('*/30 * * * *', function () {
  console.log('running a task every 30 minutes');
  particleData();
});

//run the server once when the device boots up
particleData();

function particleData() {
  axios.get(`https://api.spark.io/v1/devices/${process.env.DEVICE_ID}/result?access_token=${process.env.TOKEN}`).then(function (response) {
    // TODO: Save results in the database
    const newSensorData = JSON.parse(response.data.result);
    console.log(newSensorData);
    // INSERT INTO using a pg pool
    const queryText = `INSERT INTO readings ("temperature","humidity")
    Values ($1,$2)`;
    pool.query(queryText, [newSensorData.temp, newSensorData.humidity])
      .then((results) => {
      }).catch((error) => {
        console.log('error making POST request', error);
      });
  }).catch(function (error) {
    console.log(error);
  });
}


// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});