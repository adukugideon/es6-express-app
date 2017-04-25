const movieController = (Movie)=>{

   const post = (req, res)=>{
       let movie = new Movie(req.body);

        if(!req.body.title){
            res.status(400);
            res.send('Title is required');
        }
        else {
            movie.save();
            res.status(201);
            res.send(movie);
        }
    }

    const get = (req,res)=>{

        let query = {};

        if(req.query.genre)
        {
            query.genre = req.query.genre;
        }
        Movie.find(query, (err,movies)=>{

            if(err)
                res.status(500).send(err);
            else {

               let returnMovies = [];
                movies.forEach((element, index, array)=>{
                   let newMovie = element.toJSON();
                    newMovie.links= {};
                    newMovie.links.self = 'http://' + req.headers.host + '/api/movies/' + newMovie._id
                    returnMovies.push(newMovie);
                });
                res.json(returnMovies);
            }
        });
    }

    return {
        post: post,
        get:get
    }
}

module.exports = movieController;