import React from 'react';
import './App.css';
import DrumPads from './components/DrumPads';
import Controls from './components/Controls';

function App() {
  return (
    <div className="App">
      <DrumPads />
      <Controls />
    </div>
  );
}

export default App;
