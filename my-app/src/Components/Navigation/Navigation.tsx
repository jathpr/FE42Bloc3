import { Routes, Route, useNavigate } from "react-router-dom"
import { Authorization } from "../Authorization/Authorization"
import { RenderOnePost } from "../Post/OnePost"
import { Registration } from "../Registration/Registration"
import { useState } from "react"
import { AllTabs } from '../Tabs/AllTabs'

type Props = {setUser: (newUser: any) => void
}

type User = {
    login: string | null,
    password: string | null,
    username: string | null
}

export const Navigation = ({setUser}: Props) => {

    const [users, setUsers] = useState<User[]>([])

    const navigate = useNavigate()

    const addUser = (login: string, password: string, username: string) => {

        const newUser: User = {
            login: login,
            password: password,
            username: username
        }

        setUsers([...users, newUser])
        setUser(newUser)
    }

    const navigateFromUser = (login: string, password: string) => {
        const findUser = users.find(user => user.login === login && user.password === password)
        if (findUser) {
            navigate('/Posts')
        }
        else alert('Wrong data')
    }

    return <div>
        <Routes>
            <Route path='Reg' element={<Registration onReg={addUser} />} />
            <Route path='Auth' element={<Authorization onAuth={navigateFromUser} />} />
            <Route path='Posts/*'>
                <Route index element={<AllTabs/>} />
                <Route path=':postId' element={<RenderOnePost />} />
            </Route>
        </Routes>
    </div>
}