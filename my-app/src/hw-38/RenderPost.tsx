import style from './RenderPost.module.css'
import { Post } from './posts'



export const RenderPost = (props: { post1: Post }) => {
    return <>
        <div className={style.wrapper}>
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

