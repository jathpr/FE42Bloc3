import { ButtonMenu } from "./ButtonHeader"

export const Header = () => (
    <header className="header">
        <ButtonMenu defaultState handleClick={() => console.log('aaaaaaa')}/>
        <Title></Title>
    </header>
)

const Title = () => <div className="header__title">Sign In</div>
