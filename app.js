const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const app = express()


// Middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use("/api", require("./routes"));

module.exports = app;
