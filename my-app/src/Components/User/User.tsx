import './User.css'
import { ReactComponent as UserIcon } from './userIcon.svg';

type Props = {
    username: string | null
}

export const User = ({ username }: Props) => {
    if (username) {
        const nameSurnameArr = username.split(' ');
        const userInitials = (nameSurnameArr[0][0] + nameSurnameArr[1][0]).toUpperCase();
        return <div>
            <div className='user'>
                <p className='userInitials'>{userInitials}</p>
                <p className='userName'>{username}</p>
            </div>
        </div>
    }
    else
        return <div>
            <div className='userNoAuth'>
                <UserIcon/>
            </div>
        </div>

}