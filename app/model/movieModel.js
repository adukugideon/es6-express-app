import Mongoose from 'mongoose';
const MovieSchema = new Mongoose.Schema({
 title: {type:String},
genre: {type:String},
year: {type:Number},
rating:{type:Number}
  
});

module.exports=Mongoose.model('Movies', MovieSchema);
