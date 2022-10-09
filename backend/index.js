const express = require('express')
const cors = require('cors')
const mongoose = require('./db.js')
const routes = require('./route.js')
const app = express();
app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }))
app.listen(3000, () => console.log('Server Started '))
app.use('/employees', routes)