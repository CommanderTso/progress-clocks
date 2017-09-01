var express = require('express')
var router = express.Router()


router.get('/', function(req, res) {
	res.send({success: true, foo: 'bar'})
})

router.put('/', function(req, res) {
	
})

module.exports = router