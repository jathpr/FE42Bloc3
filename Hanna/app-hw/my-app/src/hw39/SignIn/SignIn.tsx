import React from 'react';

type Props = {
    onReg: (login: string, pass: string) => void
}

export class SignIn extends React.Component <Props>{
    state = {
        login: '',
        pass: '',
    }
    
    handleReg = () => {
        this.props.onReg(this.state.login, this.state.pass)
    }

    render() {
        return (
            <div>
                <p>Email</p>
                <input placeholder = ' Your email '  type="text" value={this.state.login} onChange={(e) => {
                    this.setState({login: e.target.value})
                }}/>
                <p>Password</p>
                <input placeholder = ' Your password ' type="text"value={this.state.pass} onChange={(e)=>{
                    this.setState({pass: e.target.value})
                }}/>
                <button onClick={this.handleReg}>Sign In</button>
            </div>
        )
    }
}
