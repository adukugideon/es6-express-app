const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


let db;

if(process.env.ENV == 'Test'){

    db = mongoose.connect('mongodb://localhost/movieAPI_test');
}

else{
    db= mongoose.connect('mongodb://localhost/movieAPI');
}

const Movie = require('./models/movieModel');

const App = express();

const port = process.env.PORT || 3000;

App.use(bodyParser.urlencoded({extended:true}));
App.use(bodyParser.json());

movieRouter = require('./Routes/movieRoutes')(Movie);


App.use('/api/movies', movieRouter); 


App.get('/', function(req, res){
    res.send('welcome to my the movie API!');
});

App.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});

module.exports = App;
