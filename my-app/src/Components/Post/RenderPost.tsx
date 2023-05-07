
import { useParams } from 'react-router-dom'
import { OnePost } from './getPosts'
import './Posts.css'
import { useEffect, useState } from 'react'
import { getPost } from './getPosts'

export const RenderPost = (props: { post?: OnePost }) => {
    const { postId } = useParams()
    const [onePost, setPost] = useState(props.post)

    useEffect(() => {
        postId && getPost(postId).then(resp => setPost(resp))
    }, [postId])

    if (!onePost) return null

    return <div className="mainDiv">
        <div className="textDiv">
            <time>{onePost.date}</time>
            <h3>{onePost.title}</h3>
            <p>{onePost.description}</p>
        </div>
        <div className="imgDiv">
            <img src={onePost.image} alt={onePost.text}></img>
        </div>
    </div>
}