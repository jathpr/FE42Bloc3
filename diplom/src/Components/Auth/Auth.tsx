import style from './Auth.module.css'
import { useState } from 'react'
import { Link } from "react-router-dom"


export const Auth = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (<>
        <div className={style.auth_wrapper}>
            <div className={style.auth_item}>
                <p className={style.auth_signIn}>Sign In</p>
                <p className={style.auth_text}>Email</p>
                <input type="text" className={style.auth_input} placeholder='Your email' onChange={(e) => setLogin(e.currentTarget.value)} value={login} />
                <p className={style.auth_text}>Password</p>
                <input type="text" className={style.auth_input} placeholder='Your password' onChange={(e) => setPassword(e.currentTarget.value)} value={password} />
                <p className={style.fp}>Forgot password</p>
                <button className={style.auth_button}>Sign in</button>
                <p className={style.text}>Don’t have an account? <span className={style.link_text}><Link to='/reg'> Sign Up </Link></span></p>
            </div>
        </div>
    </>
    )
}