import React from 'react';
import { getPosts } from './getPosts';
import { Post } from './getPosts';
import '../Post/Post.css'

type Props = {initialCount?: number};

type State = {posts? : Post[]};

export class Posts extends React.Component<Props, State> {
    componentDidMount() {
        getPosts({limit:3}).then((posts)=>this.setState({posts}));
    }
    render() {
        return(
            <div className='posts'>
                {this.state?.posts?.map((post) => (
                    <li className='post' key={post.id}>
                        <h4 className='title'>{post.title}</h4>
                        <div className='img'><img src={post.image}/></div>
                        <p className='text'>{post.text}</p>
                        <p className='date'>{post.date}</p>
                    </li>
                ))}
            </div>
        )
    }
}