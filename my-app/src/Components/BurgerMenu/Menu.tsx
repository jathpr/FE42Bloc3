import { Link } from 'react-router-dom';
import { User } from '../User/User';
import './Menu.css'

type Props = {
    isRegistred: boolean
}

export const Menu = ({ isRegistred }: Props) => {

    if (isRegistred) {
        return (
            <div className='menu'>
                <div>
                    <User username='Polina Mashukova'/>
                    <Link className='linkButton' to=''>Home</Link>
                    <Link className='linkButton' to=''>Add Post</Link>
                </div>
                <div>
                    <Link className='linkButton' to=''>Log Out</Link>
                </div>
            </div>
        )
    }
    else return (
        <div>
            <div>
                    <Link to=''>Home</Link>
                </div>
                <div>
                    <Link to='/Auth'>Sign In</Link>
                </div>
        </div>
    )
}