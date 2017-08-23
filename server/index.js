var express = require('express')
var app = express()
var clocks = require('./clocks.js')

var helmet = require('helmet')
app.use(helmet())

app.use("/clocks", clocks)

app.listen(3000, function() {
	console.log("App listening on port 3000")
})