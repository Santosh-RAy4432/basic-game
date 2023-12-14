import './App.css';

import Player from './components/Player';
import Timechanger from './components/Timechanger';

function App() {
  return (
    <>
  
    <Player />
  <div id='challenges'>
    <Timechanger title='easy' targetTime={1}/>
    <Timechanger title='medium' targetTime={6}/>
    <Timechanger title='hard' targetTime={10}/>
    <Timechanger title='veryhard' targetTime={15}/>
  </div>
    </>
  );
}

export default App;
