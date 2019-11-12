const express = require('express')
const app = express()

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const storage = require('../storage/storage')

app.get('/', (req, res) => {
  res.render('index', {
    numberLastLaps: 10,
    numberBestLaps: 5,
    lastLapsMatrix: storage.getLastLaps(10),
    bestLapsMatrix: storage.getBestLaps(5)
  })
})

app.get('/laps', (req, res) => {
  res.send(storage.getAll())
})

app.delete('/laps', (req, res) => {
  res.send(storage.deleteAll())
})

app.post('/lap', (req, res) => {
  const body = req.body
  res.send(storage.create(body.lap))
})

app.get('/lastLaps/:number', (req, res) => {
  const number = req.params.number
  res.send(storage.getLastLaps(number))
})

app.get('/bestLaps/:number', (req, res) => {
  const number = req.params.number
  res.send(storage.getBestLaps(number))
})

module.exports = app
