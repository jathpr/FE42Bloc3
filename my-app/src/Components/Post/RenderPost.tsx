
import { useParams } from 'react-router-dom'
import { OnePost } from './getPosts'
import './Posts.css'
import { useContext, useEffect, useState } from 'react'
import { getPost } from './getPosts'
import { ThemeContext } from '../Context/themeContext'

export const RenderPost = (props: { post?: OnePost }) => {
    const { postId } = useParams()
    const [onePost, setOnePost] = useState(props.post)
    const theme = useContext(ThemeContext)

    useEffect(() => {
        postId && getPost(postId).then(resp => setOnePost(resp))
    }, [postId])

    if (!onePost) return null

    return <div className="mainDiv">
        <div className={theme === 'light' ? 'textDiv' : 'textDivLight'}>
            <time>{onePost.date}</time>
            <h3>{onePost.title}</h3>
            <p>{onePost.description}</p>
        </div>
        <div className="imgDiv">
            <img src={onePost.image} alt={onePost.text}></img>
        </div>
    </div>
}