const express = require('express')
const router = require('./routes/apiRoutes')
const dotenv = require('dotenv').config()


const app = express()
const port = 3000

app.use(express.json())
app.use('/api/contacts', router)

app.listen(port, console.log("App listening on port: " + port))