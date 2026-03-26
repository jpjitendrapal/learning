import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
}

const movies: Movie[] = [
  { id: 1, title: 'The Shawshank Redemption', year: 1994, genre: 'Drama' },
  { id: 2, title: 'The Godfather', year: 1972, genre: 'Crime' },
  { id: 3, title: 'The Dark Knight', year: 2008, genre: 'Action' },
  { id: 4, title: 'Pulp Fiction', year: 1994, genre: 'Crime' },
  { id: 5, title: 'Inception', year: 2010, genre: 'Action' },
];

app.get('/api/movies', (req: Request, res: Response) => {
  if (Math.random() < 0.5) {
    return res.status(500).json({ ok: false, error: 'Internal Server Error' });
  }
  res.json({ ok: true, data: movies });
});

app.listen(port, () => {
  console.log(`Movie server running at http://localhost:${port}`);
});
