
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.set('port', process.env.PORT || 3300 );
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

app.get('/', function(req, res) {

    var files = fs.readdirSync('./public/photoalbum', function(err) {
        if(err) {
            console.log(err);
        }       
    });
    
    res.render('index', {
        photos: files
    });
    console.log('Reading files');
});









