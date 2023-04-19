import React from "react";
type State = {
    value: string
}

export class Auth extends React.Component{
    
    state = {login: '', pass: ''}
    render(){
        return <>
        <label>Login</label>
        <input value = {this.state.login} onChange={(e)=>{
            this.setState({login: e.target.value})
        }}/>

        </>
    }
} 


// <label>Passvord</label>
// <input value = {this.state.pass} onChange={(e)=>{
//     this.setState({pass: e.target.value})