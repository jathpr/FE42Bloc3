import style from './Aside.module.css'
import { Title } from '../Title/Title'

export const Aside = () => {
    return <>
        <Title />
        <div className={style.aside_wrapper}>
        <aside className={style.aside_menu}>
            <nav>
                <li>Home</li>
                <li>Trends</li>
                <li>Favourites</li>
                <li>Settings</li>
            </nav>
        </aside>
        </div></>
}