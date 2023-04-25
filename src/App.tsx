import { Counter } from "./Lesson/Counter";
import { Lesson } from "./Lesson/Lesson";

export const App = () => {
  return (
    <>
      <Lesson />
      <Counter initialCount={0} />
    </>
  );
};
