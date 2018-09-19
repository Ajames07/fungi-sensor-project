const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = 'SELECT id, temperature, humidity, lux FROM readings';
    pool.query(queryText)
    .then((results) => { res.send(results.rows); })
    .catch((error) => {
        console.log('Error completing SELECT readings query', error);
        res.sendStatus(500);
    });
});

router.get('/:id', (req,res) => {
    const queryText = 'SELECT * FROM readings WHERE id =$1';
    pool.query(queryText, [req.params.id])
    .then((results) => { res.send(result.rows); })
    .catch((error) => {
        console.log('Error completing SELECT reading query', error);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body);
    const newSensorData = req.body;
    const queryText =`INSERT INTO readings ("temperature","humidity","lux")
                        Values ($1,$2,$3)`;
    pool.query(queryText, [newSensorData.temperature,newSensorData.humidity,newSensorData.lux])
    .then((results) => {
       res.sendStatus(200);
    }).catch((error) => {
        console.log('error making POST request', error);
        res.sendStatus(500);
    })
});

module.exports = router;