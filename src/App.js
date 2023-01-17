import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showText, setShowText] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <h2> Hello Andela! </h2>
        {showText && <p>Looking forward to joining the family.</p>}
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


