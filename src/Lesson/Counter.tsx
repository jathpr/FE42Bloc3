import { useEffect, useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../features/counterSlice";
import { use42Selector, use42Dispatch } from "../store/store";

export const Counter = () => {
  const count = use42Selector((state) => state.counter.value);
  const dispatch = use42Dispatch();

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("value changed");
    return () => {
      console.log("clear data here");
    };
  }, [inputValue]);

  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <button onClick={() => dispatch(incrementByAmount(Number(inputValue)))}>
        add from input
      </button>
    </>
  );
};
