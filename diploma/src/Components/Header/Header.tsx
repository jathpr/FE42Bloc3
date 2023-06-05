import  style  from "./Header.module.css"
import { Search } from "../Search/Search"

export const Header=() => {
    return (
        <div className={style.pixema}>
            <a className={style.pix}>pix</a>
            <a className={style.ema}>ema</a>
            <Search />
        </div>
    )
}