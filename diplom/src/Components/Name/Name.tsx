import style from './Name.module.css'

const userName = 'Name Surname'

export const Name = () => {
    return <div className={style.name_wrapper}>
        <div className={style.first_letters}>{userName.split(' ').map(index => index[0]).join('').toUpperCase()}</div>
        <div className={style.full_name}>{userName} </div>
    </div>
}