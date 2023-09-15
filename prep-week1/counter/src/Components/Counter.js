import { useState } from 'react';

import Count from './Count';
import Button from './Button';

export default function Counter() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };
  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';
  return (
    <div className="counter">
      <Button event={addOne} name={'Add 1!'} />
      <Button event={reset} name={'Reset'} />
      <Count count={count} />
      <p>{feedback}</p>
    </div>
  );
}
