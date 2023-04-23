import './Post.css'

export type Post = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    description: string,
    author: number
}

export const RenderPost = (props: { post: Post }) => (
    <div className="mainDiv">
        <div className="textDiv">
            <time>{props.post.date}</time>
            <h3>{props.post.title}</h3>
            <p>{props.post.description}</p>
        </div>
        <div className="imgDiv">
            <img src={props.post.image} alt={props.post.text}></img>
        </div>
    </div>
)