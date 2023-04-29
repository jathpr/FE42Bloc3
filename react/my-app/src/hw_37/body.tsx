// import { Posts } from "../hw_38/Posts"
import { useState } from "react"
import { CardsWrapper } from "../hw_38/PostsWrapper"
import { Auth } from "../hw_40/Auth"
import { Tabs } from "./Tabs"
import { setConstantValue } from "typescript"

type User = {
    login: string,
    password: string
}

type Pages = "auth" | "reg"

export const Body = () => {

    const [user, setUser] = useState<User[]>([])
    const [page, setPage] = useState<Pages>("auth")

    return (
        <div className="body">
            <Auth onAuth={() => console.log('Auth')} onReg={() => console.log('Reg')} />
            {/* <Tabs /> */}
            {/* <CardsWrapper /> */}
        </div>)
}
