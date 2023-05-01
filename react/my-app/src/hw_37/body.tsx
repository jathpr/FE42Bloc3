// import { Posts } from "../hw_38/Posts"
import { useState } from "react"
import { CardsWrapper } from "../hw_38/PostsWrapper"
import { Auth } from "../hw_40/Auth"
import { Tabs } from "./Tabs"
import { setConstantValue } from "typescript"
import { Reg } from "../sandbox/Reg"

type User = {
    login: string,
    password: string
}

type Pages = "auth" | "reg"

const users = [
    {
        login: "admin",
        password: "123"
    }
]

export const Body = () => {

    const [user, setUser] = useState<User[]>([])
    const [page, setPage] = useState<Pages>("auth")

    const goToReg = () => setPage("reg")
    const goToAuth = () => setPage("auth")

    const regUser = (login: string, password: string) => {
        setUser([{ login, password }])
        // setPage("auth") //<== why not working?
    }

    return (
        <div className="body">
            {page === "auth" && <Auth onAuth={() => console.log('Auth')} onReg={() => goToReg()} />}
            {page === "reg" && <Reg onReg={() => regUser} onAuth={() => goToAuth()} />}
            {/* <Tabs /> */}
            {/* <CardsWrapper /> */}
        </div>)
}
