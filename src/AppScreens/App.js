import logo from '../logo.svg';
import { Router, Route, Link } from 'react-router-dom';
import '../CSS/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1>
      </header>
    </div>
  );
}

export default App;
