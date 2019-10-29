const express = require('express');
const app = express();


const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

const storage = require('../storage/storage');

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/laps', (req, res) => {
    res.send(storage.getAll());
})

app.delete('/laps', (req, res) => {

    res.send(storage.deleteAll());
})

app.post('/lap', (req, res) => {

    let body = req.body;
    res.send(storage.create(body.lap));

})

app.get('/lastLaps/:number', (req, res) => {
    let number = req.params.number;
    res.send(storage.getLastLaps(number));
})

app.get('/bestLaps/:number', (req, res) => {
    let number = req.params.number;
    res.send(storage.getBestLaps(number));
})




module.exports = app;