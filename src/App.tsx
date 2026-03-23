import { useState } from 'react';
import Home from './Home';
import HelloWorld from './pocs/HelloWorld';

function App() {
  const [currentPOC, setCurrentPOC] = useState<string | null>(null);

  const renderContent = () => {
    switch (currentPOC) {
      case 'hello-world':
        return <HelloWorld />;
      default:
        return <Home onSelectPOC={setCurrentPOC} />;
    }
  };

  return (
    <div className="App">
      {currentPOC && (
        <div style={{ padding: '1rem 2rem', position: 'absolute', top: 0, left: 0 }}>
          <button onClick={() => setCurrentPOC(null)} style={{ background: 'transparent', border: '1px solid #334155', color: '#94a3b8' }}>
            ← Back to Lab
          </button>
        </div>
      )}
      {renderContent()}
    </div>
  );
}

export default App;
