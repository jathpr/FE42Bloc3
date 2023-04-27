import React from "react";
import styles from "../css/Auth.module.css";
import { Title } from "./Title";
import { Header } from "./Header";

type Props = {
   onAuth: (login: string, pass: string) => void
}

export class Auth extends React.Component<Props> {
   state = { login: '', pass: '' }

   handleAuth = () => {
      this.props.onAuth(this.state.login, this.state.pass)
   }

   render(): React.ReactNode {
      return <>
         <Header username={null} />
         <div className={styles.auth}>
            <Title>Sign In</Title>
            <input placeholder="Enter email" className={styles['auth__input']} value={this.state.login} type="text" onChange={(e) => {
               this.setState({ login: e.target.value })
            }} />
            <input placeholder="Enter password" className={styles['auth__input']} value={this.state.pass} type="text" onChange={(e) => {
               this.setState({ pass: e.target.value })
            }} />
            {/* <button onClick={this.handleReg}>Register</button> */}
            <button className={styles['auth__submit-btn']} onClick={this.handleAuth}>Sign in</button>
         </div>
      </>
   }
}