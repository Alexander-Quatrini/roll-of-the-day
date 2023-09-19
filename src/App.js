import './App.css';
import './components/RollContainer/RollContainer.js'
import RollContainer from './components/RollContainer/RollContainer.js';
import RollStats from './components/RollStats/RollStats';
import RollList from './components/roll-list';

function App() {
  return (
    <div className="App">
      <RollContainer value={20}></RollContainer>
      <RollStats list={RollList}></RollStats>
    </div>
  );
}

export default App;
