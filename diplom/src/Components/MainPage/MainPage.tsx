import { Auth } from "../Auth/Auth"
import { Title } from "../Title/Title"
import style from "./MainPage.module.css"

export const MainPage = () => {

    return (<>
        <div className={style.main_page}>
            <Title />
            <Auth />
        </div>
    </>
    )
}