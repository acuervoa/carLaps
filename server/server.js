const express = require('express')
const app = express()

app.use(require('./routes/carlap'));

app.listen(3000, () => { console.log("Server listen to port 3000") })
