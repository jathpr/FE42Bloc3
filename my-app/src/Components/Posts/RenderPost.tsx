import { useContext } from 'react'
import style from './RenderPost.module.css'
import { Post } from './posts'
import { ThemeContext } from '../ThemeProvider'



export const RenderPost = (props: { post1: Post }) => {
    const { theme } = useContext(ThemeContext)

    return <>
        <div className={theme === 'light' ? style.wrapper : style.wrapper_dark}>
            <div>
                <p className={style.text}>{props.post1.title}</p>
                <p className={style.text}>{props.post1.date}</p>
                <p className={style.text}>{props.post1.text}</p>
                <p className={style.text}>{props.post1.description}</p>
            </div>
            <img src={props.post1.image} className={style.image} />
        </div>
    </>
}

