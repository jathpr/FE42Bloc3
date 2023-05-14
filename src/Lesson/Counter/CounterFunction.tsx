import { useState } from "react";
import { use42Dispatch, use42Selector } from "../../store/store";
import { increment, reset } from "../../features/counterSlice";

export const CounterFunction = () => {
  const count = use42Selector((state) => state.counter.value);
  const dispatch = use42Dispatch();

  // const [count, setCount] = useState(initialCount);

  const handleClear = () => {
    dispatch(reset());
  };

  return (
    <div>
      current count: {count}
      <br />
      <button onClick={() => dispatch(increment())}>Inc count</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};
