// src/routes/movieRoutes.ts
import { Router } from 'express';
import { addMovie, updateMovie, deleteMovie, searchMovies, getMovies, getMovieById } from '../controllers/movieController';
import { authenticateJWT, isAdmin } from '../middleware/authMiddleware';
import { getMoviesListuser } from '../controllers/userListsmovieController';

const router = Router();

router.post('/add', authenticateJWT, isAdmin, addMovie);
router.get('/getMovies/:id', authenticateJWT, isAdmin, getMovieById);
router.put('/update/:id', authenticateJWT, isAdmin, updateMovie);
router.delete('/delete/:id', authenticateJWT, isAdmin, deleteMovie);
router.get('/search', searchMovies);
router.get('/movieList',authenticateJWT,isAdmin, getMovies);
router.get('/user/movieList',  getMoviesListuser);

export default router;
