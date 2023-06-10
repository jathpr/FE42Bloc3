import { Aside } from '../Aside/Aside'
import { Header } from '../Header/Header'
import style from './MainPage.module.css'

export const MainPage = ()=> {
    return <div className={style.main_page}>
        <Header/>
        <Aside/>
    </div>
}