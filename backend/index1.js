const express = require('express')
const cors = require('cors')
const mongoose = require('./db1.js')
const routes = require('./route1.js')
const app = express();
app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }))
app.listen(3000, () => console.log('Server Started '))
app.use('/task', routes)