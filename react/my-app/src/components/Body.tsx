import { useContext, useState } from "react"
import { Auth } from "./Auth"
import { Reg } from "./Reg"
import { ThemeContext } from "../tools/themeContext"
import { Link, Route, Routes } from "react-router-dom";
import { MainPage } from "./MainPage"
import { Posts } from "./Posts"
import { Tabs, tabNames } from "./Tabs";
import { TabContent } from "./TabContent";

type User = {
    login: string,
    password: string
}

type Pages = "auth" | "reg" | "content" | ""

export const Body = () => {

    const [users, setUsers] = useState<User[]>([{ login: "", password: "" }])
    const [page, setPage] = useState<Pages>("")

    const goToReg = () => setPage("reg")
    const goToAuth = () => setPage("auth")

    const theme = useContext(ThemeContext)
    const lightStyle = { background: "var(--var-lightBack)" }
    const darkStyle = { background: "var(--var-darkBack)" }

    const regUser = (login: string, password: string) => {
        setUsers([...users, { login, password }])
        setPage("auth")
    }

    const checkUser = (login: string, password: string) => {
        const findUser = users.find(user => user.login === login && user.password === password)
        if (findUser) {
            <Link to={"/main"} />
        } else {
            alert("check login & password")

        }
    }

    return (
        <>
            <div className="body">
                <Routes>
                    <Route path="/main" element={<Tabs tabs={tabNames} />} />
                    <Route path="/auth" element={<Auth onAuth={checkUser} onReg={() => goToReg()} />} />
                    <Route path="/reg" element={<Reg onReg={regUser} onAuth={() => goToAuth()} />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </div>

        </>
    )
}
