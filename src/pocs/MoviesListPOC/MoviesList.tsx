import { useState, useEffect } from 'react';

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
}

interface ApiResponse {
  ok: boolean;
  data?: Movie[];
  error?: string;
}

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/api/movies');
      const result: ApiResponse = await response.json();

      if (result.ok && result.data) {
        setMovies(result.data);
      } else {
        throw new Error(result.error || 'Failed to fetch movies');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p style={{ color: '#94a3b8' }}>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', border: '1px solid #ef4444', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)' }}>
        <h3 style={{ color: '#ef4444' }}>Error</h3>
        <p style={{ color: '#f87171' }}>{error}</p>
        <button
          onClick={fetchMovies}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            background: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: '#f8fafc', marginBottom: '1.5rem' }}>Top Movies</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              padding: '1rem',
              background: '#1e293b',
              borderRadius: '8px',
              border: '1px solid #334155',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <h4 style={{ color: '#f8fafc', margin: 0 }}>{movie.title}</h4>
              <p style={{ color: '#94a3b8', margin: '4px 0 0 0', fontSize: '0.9rem' }}>{movie.genre}</p>
            </div>
            <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>{movie.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
