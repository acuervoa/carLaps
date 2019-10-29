const express = require('express')
const app = express()

const hbs = require('hbs')
require(__dirname + "/../views/helpers/helpers")

app.use(require('./routes/carlap'));
app.use(express.static(__dirname + '/../public'));

hbs.registerPartials(__dirname + '/../views/partials')

app.set('view engine', 'hbs')

app.listen(3000, () => { console.log("Server listen to port 3000") })
