const express = require('express');
const routes = (Movie)=>{
   let movieRouter = express.Router();

   let movieController = require('../Controllers/movieController')(Movie)
    movieRouter.route('/')
        .post(movieController.post)
        .get(movieController.get);

    movieRouter.use('/:movieId', (req,res,next)=>{
        Movie.findById(req.params.movieId, (err,movie)=>{
            if(err)
                res.status(500).send(err);
            else if(movie)
            {
                req.movie = movie;
                next();
            }
            else
            {
                res.status(404).send('no movie found');
            }
        });
    });
    movieRouter.route('/:movieId')
        .get((req,res)=>{

            let returnMovie = req.movie.toJSON();

            returnMovie.links = {};
            let newLink = 'http://' + req.headers.host + '/api/movies/?genre=' + returnMovie.genre;
            returnMovie.links.FilterByThisGenre = newLink.replace(' ', '%20');
            res.json(returnMovie);

        })
        .put((req,res)=>{
            req.movie.title = req.body.title;
            req.movie.genre = req.body.genre;
            req.movie.year = req.body.year;
            req.movie.rating = req.body.rating;
            req.movie.viewed = req.body.viewed;
            req.movie.save((err)=>{
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.movie);
                }
            });
        })
        .patch((req,res)=>{
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body)
            {
                req.movie[p] = req.body[p];
            }

            req.movie.save((err)=>{
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.movie);
                }
            });
        })
        .delete((req,res)=>{
            req.movie.remove((err)=>{
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return movieRouter;
};

module.exports = routes;