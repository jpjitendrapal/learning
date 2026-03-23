import React from 'react';

interface POC {
  id: string;
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
    title: 'Hello World',
    description: 'A simple component to verify the setup and demonstrate the POC structure.',
    tag: 'Basic',
  },
  // Add more POCs here
];

const Home: React.FC<HomeProps> = ({ onSelectPOC }) => {
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
          <div
            key={poc.id}
            className="card"
            onClick={() => onSelectPOC(poc.id)}
          >
            <span className="tag">{poc.tag}</span>
            <h3>{poc.title}</h3>
            <p>{poc.description}</p>
          </div>
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
