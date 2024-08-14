import { Request, Response, NextFunction } from 'express';

export const validateRegisterFields = (req: Request, res: Response, next: NextFunction) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ error: 'All fields are required: username, password, role' });
  }

  next();
};
export const validateLoginFields = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    // Additional validation logic can be added here
  
    next();
  };


export const validateMovieFields = (req: Request, res: Response, next: NextFunction) => {
  const { name, landmark, city, state, country } = req.body;

  // Check if all required fields are provided
  if (!name  || !landmark || !city || !state || !country) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  next();
};