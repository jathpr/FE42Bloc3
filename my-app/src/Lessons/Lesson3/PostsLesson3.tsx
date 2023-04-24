export type Post = {
    id: string,
    image: string,
    text: string,
}

export const Post = (props: {post : Post}) => (
    <div>
        <img src={props.post.image}></img>
        <p>{props.post.text}</p>
    </div>
)