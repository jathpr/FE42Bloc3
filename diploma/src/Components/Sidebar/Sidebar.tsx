import { useState } from "react";
import { Filter } from "../Filter/Filter";
import style from "./Sidebar.module.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";


export const Sidebar = () => {
  const [filtr, setFiltr] = useState(false)
  const handleClick = () => {
    setFiltr(!filtr)
    console.log("🚀 ~ file: Sidebar.tsx:9 ~ Sidebar ~ filtr:", filtr)
  }
  return (
    <>
    <div className={style.sidebar}>
      <nav>
        <ul>
            <li className={style.li}><Link to="/"><span className={style.a}> Home </span></Link></li>
            <li onClick={()=>handleClick()} className={style.li}><span className={style.a}>Filter</span></li>
        </ul>
      </nav>
        
      <div  className={filtr===true?style.filter:style.filter_none}>
        <Filter />
      </div>
    </div>

    </>
  );
};
