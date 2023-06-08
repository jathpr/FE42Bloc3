import style from './Aside.module.css'

export const Aside = () => {
    return <>
        <div className={style.aside_wrapper}>
            <aside className={style.aside_menu}>
                <nav>
                    <li className={style.menu_item}>Home</li>
                    <li className={style.menu_item}>Trends</li>
                    <li className={style.menu_item}>Favourites</li>
                    <li className={style.menu_item}>Settings</li>
                </nav>
            </aside>
        </div></>
}