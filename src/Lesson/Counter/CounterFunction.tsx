import { useState } from "react";

type Props = { initialCount?: number };

export const CounterFunction = ({ initialCount = 0 }: Props) => {
  const [count, setCount] = useState(initialCount);

  const handleClear = () => {
    setCount(0);
  };

  return (
    <div>
      current count: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Inc count</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};
