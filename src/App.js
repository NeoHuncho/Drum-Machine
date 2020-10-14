import React from 'react';
import './App.css';
import DrumPads from './components/DrumPads';
import Controls from './components/Controls';
import { Provider } from 'react-redux';
import Store from './store'
import {motion} from 'framer-motion'
function App() {
  return (
    <Provider store={Store} >
    <motion.div className="App" id="drum-machine"
    initial={{opacity:0, x:'10vw'}}
    animate={{opacity:1,x:0}}
    transition={{duration:1}}>
      <DrumPads />
      <Controls />
    </motion.div>
    </Provider>
  );
}

export default App;
