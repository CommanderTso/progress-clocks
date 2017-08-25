var listenPort = process.env.NODE_PORT || 3000
console.log('app: listening on port ' + listenPort)
var app = require('./index.js')

app.listen(listenPort)