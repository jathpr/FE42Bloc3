import { Link, Route, Routes } from 'react-router-dom'
import style from './SideBar.module.css'
import { MainPage } from '../MainPage/MainPage'
import { Trends } from '../Trends/Trends'
import { Settings } from '../Settings/Settings'

export const SideBar = () => {

    return (
        <div className={style.sidebar_container}>
            <aside>
                <nav className={style.sidebar_wrapper}>
                    <Routes>
                        {/* <Route path='/' element={<></>}></Route> */}
                        <Route path='/Trends' element={<Trends/>}></Route>
                        {/* <Route path='/Favourites' element={<Favourites></Favourites>}></Route> */}
                        <Route path='/Settings' element={<Settings></Settings>}></Route>
                    </Routes>
                    <li className={style.menu_item}> <Link to='/'> <span className={style.menu_item_text}>Home</span> </Link></li>
                    <li className={style.menu_item}> <Link to='/Trends'> <span className={style.menu_item_text}>Trends</span> </Link> </li>
                    <li className={style.menu_item}> <Link to='/Favourites'> <span className={style.menu_item_text}>Favourites</span> </Link></li>
                    <li className={style.menu_item}> <Link to='/Settings'> <span className={style.menu_item_text}>Settings</span> </Link> </li>
                </nav>
            </aside>
        </div>
    )
}
