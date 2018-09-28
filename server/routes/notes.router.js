const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.get('/', (req,res) => {
//     const queryText = 'SELECT id, notes FROM person';
//     pool.query(queryText)
//     .then((results) => { res.send(results.rows); })
//     .catch((error) => {
//         console.log('Error completeing SELECT from readings query', error);
//         res.sendStatus(500);
//     });
// });

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM person WHERE "person".id =$1`;
    pool.query(queryText, [req.user.id])
    .then((results ) => { res.send(results.rows);
        console.log(results.rows)
     })
    .catch((error) => {
        console.log('Error completing SELECT data query', error);
        res.sendStatus(500);
    });
});

router.post('/', ( req, res ) => {
    console.log(req.body);
    const personalNotesData = req.body;
    const queryText = `INSERT INTO person ("notes)
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
    const queryText = `UPDATE person SET "notes" = $1 WHERE id = $2;`;

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

router.put('/update/:id', ( req , res ) => {
    console.log(req.params.id);
    const queryText = `UPDATE person SET "notes" = $1 WHERE id =$2;`;

    pool.query(queryText, [req.params.id, req.user.id])
    .then(() => {res.sendStatus(200); })
    .catch((error) => {
        console.log('Error completing update person');
        res.sendStatus(500);
    });   
});
module.exports = router;