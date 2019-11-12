const path = require('path')
const express = require('express')
const app = express()

const hbs = require('hbs')
require(path.join(__dirname, '/../views/helpers/helpers'))

app.use(require('./routes/carlap'))

app.use(express.static(path.join(__dirname, '/../public')))

hbs.registerPartials(path.join(__dirname, '/../views/partials'))

app.set('view engine', 'hbs')

app.listen(3000, () => { console.log('Server listen to port 3000') })
