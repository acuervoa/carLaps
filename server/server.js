const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/lastLaps/:number', (req,res) => {
    res.send('lastLaps number')
})

app.get('/bestLaps/:number', (req,res) => {
    res.send('bestLaps number')
})

app.post('/lap', (req,res) => {
    res.send('lap')
})


app.listen(3000)
