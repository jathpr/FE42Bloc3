import { Link } from "react-router-dom"
import "../index.css"

export const SignIn = () => {
    return (
        <Link to={"/auth"} className="link">
            <button className="button header__signIn" style={{width: "100%", backgroundColor: "var(--var-primaryColor)"}}>Sign in!</button>
        </Link>
    )
}
