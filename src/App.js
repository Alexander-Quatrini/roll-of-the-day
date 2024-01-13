import './App.css';
import './components/RollContainer/RollContainer.js'
import RollStats from './components/RollStats/RollStats';
import RollList from './components/roll-list';
import RollHeader from './components/Header/Header';
import RollDisplay from './components/RollDisplay/RollDisplay.js';
import RollCalendar from './components/RollCalendar/RollCalendar.js';

function App() {
  return (
    <div className="App">
      <RollHeader></RollHeader>
      <h1>Today's roll of the day is...</h1>
      <RollDisplay value={20} large></RollDisplay>
      <RollStats list={RollList}></RollStats>
      <RollCalendar></RollCalendar>
    </div>
  );
}

export default App;
