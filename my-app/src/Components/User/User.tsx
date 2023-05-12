import './User.css'

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
                <svg width="35px" height="35px" viewBox="0 0 24 24" transform="translate(7 7)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9ZM15.8243 13.6235C17.1533 12.523 18 10.8604 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.8604 6.84668 12.523 8.17572 13.6235C4.98421 14.7459 3 17.2474 3 20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20C5 17.7306 7.3553 15 12 15C16.6447 15 19 17.7306 19 20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20C21 17.2474 19.0158 14.7459 15.8243 13.6235Z" fill="#fff" />
                </svg>
            </div>
        </div>

}