// import { Posts } from "../hw_38/Posts"
import { useState } from "react"
import { CardsWrapper } from "../hw_38/PostsWrapper"
import { Auth } from "../hw_40/Auth"
import { setConstantValue } from "typescript"
import { Reg } from "../hw_41/Reg"
import { Search } from "../hw_41/Search"

type User = {
    login: string,
    password: string
}

type Pages = "auth" | "reg" | "content"

export const Body = () => {

    const [users, setUsers] = useState<User[]>([])
    const [page, setPage] = useState<Pages>("auth")

    const goToReg = () => setPage("reg")
    const goToAuth = () => setPage("auth")

    const regUser = (login: string, password: string) => {
        setUsers([...users, { login, password }])
        setPage("auth")
    }

    const checkUser = (login: string, password: string) => {
        const findUser = users.find(user => user.login === login && user.password === password)
        if (findUser) {
            setPage("content")
        } else {
            alert("check login & password")
        }
    }

    return (
        <div className="body">
            {page === "auth" && <Auth onAuth={checkUser} onReg={() => goToReg()} />}
            {page === "reg" && <Reg onReg={regUser} onAuth={() => goToAuth()} />}
            {page === "content" && <CardsWrapper />}
        </div>)
}
