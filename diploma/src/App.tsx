import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './Components/Header/Header'
import { RenderMoviesList } from './Components/Movies/RenderMoviesList';
import { RenderMovie } from './Components/Movies/RenderMovie';
import { Aside } from './Components/Aside/Aside';
import { Trends } from './Components/Trends/Trends';
import style from "./Components/Wrapper/Wrapper.module.css"
import {Link, Route, Routes } from 'react-router-dom';

type Pages = "main"|"trends"|'favorites'

function App() {
  const [page, setPage] = useState<Pages>("main")

//   useEffect(()=> { setPage("trends") }, [users])
// const navToTrends = () => {
//   setPage('trends')
// }
  return (
    <div className="App">
      {page === "main"}
      <header className="App-header"> 
      <Header />
      </header>
      <div className={style.wrapper}>
      <Aside />
      <Trends />
      </div>
      <RenderMoviesList />
      <RenderMovie movie={{}} />
    </div>
  );
}

export default App;
