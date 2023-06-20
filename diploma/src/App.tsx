import React, { useState, useEffect } from "react";
import style from "./App.module.css";
import { Header } from "./Components/Header/Header";
import { RenderMoviesList } from "./Components/Movies/RenderMoviesList";
import { RenderMovie } from "./Components/Movies/RenderMovie";
import { Auth } from "./Components/Auth/Auth";
import { Link, Route, Routes } from "react-router-dom";
import { Registration } from "./Components/Registration/Registration";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Content } from "./Components/Content/Content";
import { Mainpage } from "./Components/Mainpage/Mainpage";

type Pages = "reg" | "auth" | "movies";
type User = {
  login: string;
  password: string;
};
export const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<Pages>("reg");
  const addUser = (login: string, password: string) => {
    setUsers([...users, { login, password }]);
  };

  const checkUser = (login: string, password: string) => {
    const result = users.find((user) => user.login === login && user.password === password);
  setPage("movies")}
  useEffect(() => {setPage("reg")}, [users]);
  const navToReg = () => setPage("reg");
  const navToMovie = () => setPage("movies");
  const navToAuth = () => setPage("auth")
  return (
    <>
 {/* {page === "reg" && <Registration onReg={navToAuth} onSignUp={navToAuth} />}
    {page === "auth" && <Auth onAuth={checkUser} onSignIn={navToMovie}/>}
  {page === "movies" && <Mainpage />} */}


 {/* <Routes>
      <Route path="/reg"element={<Registration onReg={navToReg} onSignUp={navToAuth} />}/>
      <Route path="/auth" element={<Auth onAuth={checkUser} onSignIn={navToMovie}/>} />
      <Route path = '/movies' element = {<Mainpage />} />
  </Routes> */}

  {/* <Auth  onAuth={checkUser} onSignIn={navToMovie}/>  */}
  {/* <Registration onReg={navToAuth} onSignUp={navToReg} /> */}
  <Mainpage /> 

   
  </>
  );
};

export default App;
