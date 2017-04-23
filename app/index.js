import Express from 'express';
import Mongoose from 'mongoose';
import BodyParser from 'body-parser';
import Config from '../config.json';
import Controller from './controller/movieController';
let App=Express();
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({extended:true}));

App.post('/addMovie', Controller.addMovie);
App.get('/movies', Controller.getMovies);
Mongoose.connect(Config.MONGO_URL);
const Server = App.listen(Config.PORT, (err)=>{
    if(err){
        console.log("There was an error ")
    }
  
    console.log('Express api is running on '+ Config.PORT);
}
);

module.exports=App;