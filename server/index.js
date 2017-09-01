var express = require('express')
var app = express()
var clocks = require('./clocks.js')

var helmet = require('helmet')
app.use(helmet())

app.use("/clock", clocks)

module.exports = app