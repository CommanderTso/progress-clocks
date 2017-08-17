var express = require('express')
var app = express()

var helmet = require('helmet')
app.use(helmet())

app.get("/test", function(req, res) {
	res.send({success: true, foo: 'bar'})
})

app.listen(3000, function() {
	console.log("App listening on port 3000")
})