require('node-jsx').install({harmony: true})
var express = require('express')
var reactEngine = require('react-engine')
var app = express()
var port = 3000

var engine = reactEngine.server.create({/*Pass Options*/})

/*Public and Source folders*/
app.set('views', __dirname + '/src/views')
app.use(express.static(__dirname + '/public'))

/*Config engine for react engine*/
app.set('view engine', 'jsx')
app.engine('.jsx', engine)
app.set('view', reactEngine.expressView)

/*Routes*/
app.get('/', function(req, res){
  res.render('home', {title: 'Hola mundo!'})
})

/*Listen an run Server*/
app.listen(port, function(){
  console.log('Server running on port: ' + port);
})
