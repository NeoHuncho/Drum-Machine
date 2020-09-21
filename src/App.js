import React from 'react';
import './App.css';
import DrumPads from './components/DrumPads';
import Controls from './components/Controls';
import { Provider } from 'react-redux';
import Store from './store'
function App() {
  return (
    <Provider store={Store} >
    <div className="App" id="drum-machine">
      <DrumPads />
      <Controls />
    </div>
    </Provider>
  );
}

export default App;
