import { useState } from 'react';
import './Challenge6.css';

export default function Challenge6() {
  const [position, setPosition] = useState(300);
  const changePosition = () => {
    setPosition(position - 10);
  };
  return (
    <div className="Challenge6">
      <h1>Move the Box!</h1>

      <button onClick={changePosition}>👆 Move Up 👆</button>

      <div className="box" style={{ transform: `translateY(${position}px)` }} />
    </div>
  );
}
