import logo from './logo.svg';
import './App.css';
import './components/RollContainer/RollContainer.js'
import RollContainer from './components/RollContainer/RollContainer.js';
import RollStats from './components/RollStats/RollStats';
import RollList from './components/roll-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <RollContainer value={20}></RollContainer>
      <RollStats list={RollList}></RollStats>
    </div>
  );
}

export default App;
