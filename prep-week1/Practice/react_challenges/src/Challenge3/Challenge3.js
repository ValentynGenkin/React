import { useState } from 'react';
import './Challenge3.css';

export default function Challenge3() {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  return (
    <div className="Challenge3">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      <div className="input-display">
        <p>Display Name: {name} </p>
        <p>Display Age: {age}</p>
      </div>

      <div className="inputs">
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            type="text"
            placeholder="William"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Age:</label>

          <input
            className="input"
            type="number"
            placeholder="38"
            value={age}
            onChange={(e) => setAge(+e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
