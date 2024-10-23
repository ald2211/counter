import { useState } from 'react';
import CounterDisplay from '../components/CounterDisplay';
import Button from '../components/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <CounterDisplay count={count} />
      <div>
        <Button click={increment} action={"Increment"} />
        <Button click={decrement} action={"Decrement"} />
      </div>
    </div>
  );
};

export default Counter;
