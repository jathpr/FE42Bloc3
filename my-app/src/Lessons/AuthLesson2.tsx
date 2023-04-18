import React from "react";

type State = { state: string }

export class Auth extends React.Component {

    state = { value: '', password: '' }
    render() {
        return <>
            <label>Login:</label>
            <input value={this.state.value} onChange={(e) => {
                this.setState({ value: e.target.value })
            }} ></input>

            <label>Password:</label>
            <input value={this.state.password} onChange={(e) => {
                this.setState({ password: e.target.value })
            }} ></input>
        </>
    }
}