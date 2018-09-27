const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    const queryText = 'SELECT id, notes FROM data';
    pool.query(queryText)
    .then((results) => { res.send(results.rows); })
    .catch((error) => {
        console.log('Error completeing SELECT from readings query', error);
        res.sendStatus(500);
    });
});

router.get('/:id', (req,res) => {
    const queryText = 'SELECT notes FROM data WHERE id =$1';
    pool.query(queryText, [req.params.id])
    .then((results ) => { res.send(results.rows); })
    .catch((error) => {
        console.log('Error completing SELECT data query', error);
        res.sendStatus(500);
    });
});

router.post('/', ( req, res ) => {
    console.log(req.body);
    const personalNotesData = req.body;
    const queryText = `INSERT INTO data ("notes)
                        Values ($1)`;
    pool.query(queryText, [personalNotesData.notes])
    .then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error making POST request', error);
        res.sendStatus(500);
    });
});

router.put('/:id', ( req , res ) => {
    const updatePersonalNotes = req.body;
    const queryText = `UPDATE person SET "notes" = $1, WHERE id = $2;`;

    const queryValues = [
        updatePersonalNotes.notes,
        req.params.id,
    ];

    pool.query(queryText,queryValues)
    .then(() => {res.sendStatus(200); })
    .catch((error) => {
        console.log('Error completing SELECT person', error);
        res.sendStatus(500);
    });
});
module.exports = router;