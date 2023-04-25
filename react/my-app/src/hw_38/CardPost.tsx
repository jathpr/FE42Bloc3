import "./cards.css";

export type PostProps = {
    image?: string,
    text: string,
    date: string,
    title: string,
    description: string
}

export const CardPost = (cardProps: { post: PostProps }) => (
    <div className="card-item">
        <h3 className="card__title">{cardProps.post.title}</h3>
        <img className="card__image" src={cardProps.post.image} />
        <p className="card__text">{cardProps.post.text}</p>
        <p className="card__description">{cardProps.post.description}</p>
        <span className="card__date">{cardProps.post.date}</span>
    </div>
)
