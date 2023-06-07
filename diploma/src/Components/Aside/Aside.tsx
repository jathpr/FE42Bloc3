import  style  from "./Aside.module.css"
import {Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export const Aside = () => {
    return (
        <aside className={style.aside}>
        <nav> 
        <ul>
        <li className={style.li}><a className={style.a} href="">Home</a></li>
        <li className={style.li}><a className={style.a} href="">Trends</a></li>
        <li className={style.li}><a className={style.a} href="">Favorites</a></li>
        <li className={style.li}><a className={style.a} href="">Settings</a></li>
        </ul>
        </nav>
       
        </aside>
    )
}