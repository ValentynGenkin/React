import { useState } from 'react';
import './Challenge4.css';

export default function Challenge4() {
  const [phrase, setPhrase] = useState('');
  if (phrase === 'open sesame') {
    alert('You may pass!');
  }
  return (
    <div className="Challenge4">
      <h2 className="h2">Show an Alert Based on Input</h2>
      <h2 className="h2">What's the secret phrase?</h2>

      <input
        className="input"
        type="text"
        placeholder="Super duper secret"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
      />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>
    </div>
  );
}
