import React from "react";
import styles from "../css/Registration.module.css";

type Props = {
   onReg: (login: string, pass: string) => void
}

type State = {
   login: string,
   pass: string
}

export class Registration extends React.Component<Props, State> {
   state = { login: '', pass: '' }

   handleReg = () => {
      this.props.onReg(this.state.login, this.state.pass)
   }

   render(): React.ReactNode {
      return <>
         <input value={this.state.login} type="text" onChange={(e) => {
            this.setState({ login: e.target.value })
         }} />
         <input value={this.state.pass} type="text" onChange={(e) => {
            this.setState({ pass: e.target.value })
         }} />
         <button onClick={this.handleReg}>Register</button>
      </>
   }
}