const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const movieModel = new Schema({
   title: {type:String},
genre: {type:String},
year: {type:Number},
rating:{type:Number},
   viewed: {type: Boolean, default:false}
});

module.exports= mongoose.model('Movie', movieModel);
