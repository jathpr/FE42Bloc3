import style from './User.module.css'

export const User = () => {
    const username = 'Viktar Maksimau'
    return (
        <div className={style.user}>
            <div className={style.user_icon}>
                <div className={style.user_letters}>{username.split(' ')[0][0]+username.split(' ')[1][0] }</div>
            </div>
                <span className={style.username}>{username}</span>
        </div>
    )
}