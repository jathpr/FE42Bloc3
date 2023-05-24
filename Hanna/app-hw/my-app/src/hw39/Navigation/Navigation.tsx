import React from 'react';
import { SignIn } from '../SignIn/SignIn';
import { Success } from '../Success/Success'

export class Navigation extends React.Component {
    state = {
        page: 'SignIn',
        user: {
            login: null,
            pass: null,
        }
    }

    onReg = (login: string, pass: string) => {
        if (!login) return
        if (!pass) return
        this.setState({user: {login, pass}, page: 'Success'})
    }

    onMain = () => {
        this.setState({page: 'SignIn'})
    }

    render() {
        return(
            <>
                {this.state.page === 'SignIn' && <SignIn onReg={this.onReg}></SignIn>}
                {this.state.page === 'Success' && <Success onMain={this.onMain}></Success>}
            </>
        )
    }
}


