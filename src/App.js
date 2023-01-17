import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Hello Andela! </h2>
        {showText && <p>Looking forward to joining the pool.</p>}
        <button
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setShowText(true)}
        >
          Reveal
        </button>
      </header>
    </div>
  );
}

export default App;


