import React from 'react';

const HelloWorld: React.FC = () => {
  return (
    <div className="container">
      <h2 className="title" style={{ fontSize: '2.5rem' }}>Hello World POC</h2>
      <p className="subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
        This is a simple Proof of Concept to verify that the routing and styling are working correctly.
      </p>
      
      <div className="card" style={{ maxWidth: '600px', cursor: 'default' }}>
        <h3>Component Test</h3>
        <p>If you can see this card with premium styling, the setup is successful!</p>
        <div style={{ marginTop: '2rem' }}>
          <button onClick={() => alert('React is working!')}>Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
