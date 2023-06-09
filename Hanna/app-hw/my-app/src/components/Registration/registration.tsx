import React, { useState } from 'react';

type Props ={onReg:(login: string, password: string) => void};

export const Registration = ({onReg}: Props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <form>
                <input type="text" placeholder='Login' value={login} onChange={(e) => setLogin(e.target.value)}/>
                <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' onClick={()=> onReg(login, password)}>Sign Up</button>
            </form>
        </>
    )
}