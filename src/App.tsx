import { Link } from "react-router-dom";
import { Counter } from "./Lesson/Counter";
import { Lesson } from "./Lesson/Lesson";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/count">Count</Link>
      <Routes>
        <Route path="/" element={<Lesson />} />
        <Route path="count" element={<Counter initialCount={0} />} />
      </Routes>
    </>
  );
};
