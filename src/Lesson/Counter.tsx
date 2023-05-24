import { useEffect, useState } from "react";
import {
  decrement,
  fetchPosts,
  increment,
  incrementByAmount,
  reset,
} from "../features/counterSlice";
import { use42Selector, use42Dispatch } from "../store/store";
import styled from "@emotion/styled";

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
      <button
        onClick={() => {
          // dispatch(reset());
          dispatch(fetchPosts());
        }}
      >
        reset
      </button>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <Button onClick={() => dispatch(incrementByAmount(Number(inputValue)))}>
        add from input
      </Button>
    </>
  );
};

const Button = styled.button`
  background-color: red;
`;
