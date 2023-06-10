import { Auth } from "../Auth/Auth"
import { Registration } from "../Registration/Registration"
import { Title } from "../Title/Title"
import style from "./SignPage.module.css"
import { BrowserRouter as Route, Routes } from "react-router-dom"

export const SignPage = () => {

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