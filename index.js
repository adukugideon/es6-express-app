import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import movieRouter from './Routes/movieRoutes';
import config from './config';

const App = express();

const port = process.env.PORT || 3000;

App.use(bodyParser.urlencoded({extended:true}));
App.use(bodyParser.json());

//const movieRouter = require('./Routes/movieRoutes');
Promise = require('bluebird'); 

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});
App.use('/api/movies', movieRouter); 


App.get('/', (req, res)=>{
    res.send('welcome to my the movie API!');
});

App.listen(port, ()=>{
    console.log('Gulp is running my app on  PORT: ' + port);
});

export default App;
