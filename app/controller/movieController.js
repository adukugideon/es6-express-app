import Movie from '../model/movieModel';

exports.addMovie=(req, res) =>{

const movie = new Movie();
   movie.title=req.body.title;
  movie.genre=req.body.genre;
  movie.year=req.body.year;
  movie.rating=req.body.rating;
    movie.save((err)=> {
        if(err){
            res.send(err);
        }
        res.send(movie);
    })
	
	
 }

 exports.getMovies=(req, res)=>{
     const movies = new Movie();
     let query = {};

        if(req.query.genre)
        {
            query.genre = req.query.genre;
        }
        Movie.find(query, (err,movies)=>{

            if(err)
                res.status(500).send(err);
            else {

               
                res.json(movies);
            }
        });
 }