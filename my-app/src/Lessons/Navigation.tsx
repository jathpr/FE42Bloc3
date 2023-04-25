import React from "react";
import { Registration } from "./Registration";
import { PostsList } from "../Components/PostsList";



export class Navigation extends React.Component {
    state = {
        page: "Reg",
        user: {
            login: null,
            password: null
        }
    }

    onReg = (login: string, password: string) => {
        if (!login) return
        if (!password) return
        this.setState({ page: "Main", user: { login, password } })
    }

    render() {
        return <>
        {this.state.page === "Reg" && <Registration onReg={this.onReg}/>}
        {/* {this.state.page === "Main" && <PostsList posts={[]}/>} */}
        </>
    }
}