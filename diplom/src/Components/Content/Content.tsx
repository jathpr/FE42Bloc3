import { Trends } from '../Trends/Trends'
import style from './Content.module.css'

export const Content = () => {
    return (
        <div className={style.content_container}>
            <Trends />
        </div>
    )
}