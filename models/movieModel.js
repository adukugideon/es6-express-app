const Promise =require('bluebird');
const  mongoose =require('mongoose');
const  APIError =require('../helper/APIError');
const Schema = mongoose.Schema;

const movieModel = new Schema({
title: {type:String, trim:true},
genre: {type:String, trim:true},
year: {type:Number},
rating:{type:Number},
viewed: {type: Boolean, default:false},
postedOn: {
    type: Date,
    default: Date.now
  }
});
movieModel.method({
});

movieModel.statics = {

  get(id) {
    return this.findById(id)
      .exec()
      .then((movie) => {
        if (movie) {
          return movie;
        }
        const err = new APIError('Movie does not exist!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },


  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ postedOn: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

export default mongoose.model('Movie', movieModel);
