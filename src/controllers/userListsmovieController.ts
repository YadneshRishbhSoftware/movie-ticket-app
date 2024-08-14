import { Request,Response } from "express";
import Movie from "../models/Movie";
import Booking from "../models/Booking";

export const getMoviesListuser = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        // Build the search query
        let query = {};

        if (search) {
            query = {
                $or: [
                    { name: { $regex: search, $options: 'i' } },
                    { landmark: { $regex: search, $options: 'i' } },
                    { country: { $regex: search, $options: 'i' } },
                    { state: { $regex: search, $options: 'i' } },
                ]
            };
        }

        const movies = await Movie.find(query).populate('photo').populate('trailer')
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error getting movies:', error);
        res.status(500).json({ error: 'Failed to get movies' });
    }
};
export const bookMovie = async (req: Request, res: Response) => {
    try {
      const { userId, movieId, seats } = req.body;
  
      // Validate movie existence
      const movie = await Movie.findById(movieId);
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
  
      // Create a new booking
      const booking = new Booking({
        user: userId,
        movie: movieId,
        seats,
      });
  
      await booking.save();
  
      res.status(201).json({ message: 'Booking successful', booking });

    } catch (error) {
      console.error('Error booking movie:', error);
      res.status(500).json({ error: 'Failed to book movie' });
    }
  };