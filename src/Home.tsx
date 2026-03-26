import { Link } from 'react-router-dom';

interface POC {
  id: string;
  path: string;
  title: string;
  description: string;
  tag: string;
}

interface HomeProps {
  onSelectPOC: (id: string) => void;
}

const pocs: POC[] = [
  {
    id: 'hello-world',
    path: '/poc/hello-world',
    title: 'Hello World',
    description: 'A simple component to verify the setup and demonstrate the POC structure.',
    tag: 'Basic',
  },
  {
    id: 'movies-list',
    path: '/poc/movies-list',
    title: 'Movies List',
    description: 'Fetch and display movies from a local API with error handling for unpredictable failures.',
    tag: 'API',
  },
  // Add more POCs here
];

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">React Learning Lab</h1>
        <p className="subtitle">
          A collection of Proof of Concepts and experiments for learning React and TypeScript.
        </p>
      </header>

      <div className="grid">
        {pocs.map((poc) => (
          <Link
            key={poc.id}
            to={poc.path}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="card">
              <span className="tag">{poc.tag}</span>
              <h3>{poc.title}</h3>
              <p>{poc.description}</p>
            </div>
          </Link>
        ))}

        <div className="card" style={{ borderStyle: 'dashed', opacity: 0.6, cursor: 'default' }}>
          <span className="tag" style={{ color: '#94a3b8' }}>Coming Soon</span>
          <h3>More POCs...</h3>
          <p>Upcoming experiments on Hooks, Context, State Management, and more.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
