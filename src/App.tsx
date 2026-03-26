import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './Home';
import HelloWorld from './pocs/HelloWorld';
import MoviesList from './pocs/MoviesListPOC/MoviesList';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="App">
      {!isHome && (
        <div style={{ padding: '1rem 2rem', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button style={{ background: 'transparent', border: '1px solid #334155', color: '#94a3b8', cursor: 'pointer' }}>
              ← Back to Lab
            </button>
          </Link>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home onSelectPOC={() => {}} />} />
        <Route path="/poc/hello-world" element={<HelloWorld />} />
        <Route path="/poc/movies-list" element={<MoviesList />} />
      </Routes>
    </div>
  );
}

export default App;
