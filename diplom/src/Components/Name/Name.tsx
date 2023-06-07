import style from './Name.module.css'

export const Name = () => {
    return <div className={style.name_wrapper}>
        <div className={style.first_letters}>Name Surname</div>
        <div className={style.full_name}>Name Surname   </div>
    </div>
}