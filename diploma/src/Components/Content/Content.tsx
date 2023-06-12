import { Route, Routes } from "react-router-dom";
import style  from "./Content.module.css";
import { Trends } from "../Trends/Trends";
import { Favorites } from "../Favorites/Favorites";

export const Content = () => {
  return <div className={style.conten}>
    <Routes>
      <Route path="/trends" element = {<Trends></Trends>}></Route>
      <Route path="/favorites" element = {<Favorites></Favorites>}></Route>
    </Routes>
  </div>;
};