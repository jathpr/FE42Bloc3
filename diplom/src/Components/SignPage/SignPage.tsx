import { useState } from "react";
import { Auth } from "../Auth/Auth"
import { Registration } from "../Registration/Registration"
import { Title } from "../Title/Title"
import style from "./SignPage.module.css"
import { Routes, Route } from "react-router-dom";

type Page = 'auth' | 'reg'

export const SignPage = () => {
    const [page, setPage] = useState<Page>('auth')

    return (
        <div className={style.sign_page}>
            <Title />
            <Routes>
                <Route path='/auth' element={<Auth />} />
                <Route path='/reg' element={<Registration />} />
            </Routes>
        </div >
    )
}