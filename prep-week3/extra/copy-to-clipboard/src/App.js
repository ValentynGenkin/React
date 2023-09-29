import './App.css';
import { useCopy } from './Hooks/useCopy.js';
import { useState } from 'react';

function App() {
  const [handleCopy] = useCopy(null);
  const [text, setText] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleClipboard = (text) => {
    handleCopy(text)
      .then(() => setMsg('Done'))
      .catch((e) => {
        console.error(e);
        setMsg('Error');
      });
  };

  return (
    <div className="App">
      <p>Input text</p>
      <input
        className="input"
        type="text"
        placeholder="text"
        onChange={(e) => {
          setMsg(null);
          setText(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          handleClipboard(text);
        }}
      >
        Copy text
      </button>
      {msg && <div>{msg}</div>}
    </div>
  );
}

export default App;
