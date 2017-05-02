import express from 'express';
import movieController  from '../Controllers/movieController';
import Movie from '../models/movieModel.js'

const movieRouter = express.Router();
movieRouter.route('/')
  /** GET  - Get list of movies */
  .get(movieController.list)

  /** POST /api/movies - Create new movie */
  .post( movieController.postMovie);

movieRouter.route('/:movieId')
  /** GET /api/movies/:movieId - Get movie */
  .get(movieController.getMovie)

  /** PUT /api/movies/:movieId - Update movie */
  .put( movieController.update)

  /** DELETE /api/movies/:movieId - Delete movie */
  .delete(movieController.remove);

/** Load movie when API with movieId route parameter is hit */
movieRouter.param('movieId', movieController.load);
 
export default movieRouter;