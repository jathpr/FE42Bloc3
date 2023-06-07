import { Name } from '../Name/Name'
import { Search } from '../Search/Search'
import style from './Header.module.css'

export const Header = () => {
    return <div className={style.header_wrapper}>
        <Search />
        <Name />
    </div>
}