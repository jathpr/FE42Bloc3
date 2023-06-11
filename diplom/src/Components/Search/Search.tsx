import style from './Search.module.css'

export const Search = () => {
    return <div className={style.search_container}>
        <input className={style.search_input} placeholder='Search'>

        </input>
    </div>
}