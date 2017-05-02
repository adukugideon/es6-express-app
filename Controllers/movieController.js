import Movie from '../models/movieModel.js'

function load(req, res, next, id) {
 Movie.get(id)
    .then((movie) => {
      req.movie = movie;
      return next();
    })
    .catch(e => next(e));
}
function getMovie(req, res) {
  return res.json(req.movie);
}
function  postMovie(req, res, next) {
    
   let movie = new Movie(req.body);
 
   movie.save()
    .then(movie => res.json(movie))
    .catch(e => next(e));
        
}

function update(req, res, next) {
  const movie = req.movie;

    movie.title = req.body.title;
    movie.genre = req.body.genre;
    movie.year = req.body.year;
    movie.rating = req.body.rating;
    movie.viewed = req.body.viewed;
  movie.save()
    .then(savedMovie => res.json(savedMovie))
    .catch(e => next(e));
}

function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Movie.list({ limit, skip })
    .then(movies => res.json(movies))
    .catch(e => next(e));
}


function remove(req, res, next) {
  const movie = req.movie;
  movie.remove()
    .then(deletedMovie => res.json(deletedMovie))
    .catch(e => next(e));
}
export default {postMovie, getMovie,load, update, list, remove };