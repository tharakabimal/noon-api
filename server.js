var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();
var PORT = process.env.PORT || 8080;

bodyParser = require('body-parser');

var routes = require('./routes/post.route');

const mongoUrl = 'mongodb://127.0.0.1/noon';

var corsOptions = {
	"origin": "http://localhost:3000",
	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
	"preflightContinue": false,
	"optionsSuccessStatus": 204,
	"credentials": true
}

// connect to mongo db
var options = {
    useMongoClient: true
}

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, options);
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, function() {
    console.log('noon API running on port ' + PORT);
})