import './App.css';
import React from 'react';
import socket from './socket';
import Join from './components/Join.tsx';

function App() {
  return (
    <div className="wrapper">
      <Join />
    </div>
  );
}

export default App;
