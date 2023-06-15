import React from 'react';
import { Posts } from '../PostList/Posts/Posts';

type Props = {
    onMain: (page: string) => void
}


export class Success extends React.Component <Props> {
    state = {
        page: 'Success', 
    }
    handleClick = () => {
        this.props.onMain(this.state.page)
    }
    render() {
        return(
            <div>
                <h1>Success</h1>
                <div>
                    <div>
                        <p>Thank You!</p>
                        <button onClick={this.handleClick}>Go to home</button>
                        <Posts></Posts>
                    </div>
                </div>
            </div>
        )
    }
}