// Import dependencies
const mysql = require('mysql');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'pass',
    database: 'my_db',
})

// Connect to mongodb
connection.connect();

connection.query('SELECT * FROM users', function (err, rows, fields) {
    if (err) throw err

    console.log('First user is: ', rows[0].first)
});

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

/* GET all users. */
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});  

/* GET one users. */
router.get('/users/:id', (req, res) => {
    User.findById(req.param.id, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* Create a user. */
router.post('/users', (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

module.exports = router;