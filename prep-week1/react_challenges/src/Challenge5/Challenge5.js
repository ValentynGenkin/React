import { useState } from 'react';
import './Challenge5.css';

export default function Challenge5() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  function handleNumber1Change(e) {
    setNumber1(Number(+e.target.value));
  }

  function handleNumber2Change(e) {
    setNumber2(+e.target.value);
  }

  function calculateAdd() {
    setTotal(number1 + number2);
  }
  function calculateSubtract() {
    setTotal(number1 - number2);
  }
  return (
    <div className="Challenge5">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input type="number" placeholder="0" onChange={handleNumber1Change} />
        <input type="number" placeholder="0" onChange={handleNumber2Change} />
      </div>

      <button onClick={calculateAdd}>Add Them!</button>
      <br />
      <button onClick={calculateSubtract}>Subtract Them!</button>

      <h2>{total}</h2>
    </div>
  );
}
