import styles from "../css/Header.module.css";
import { ButtonHamburger } from "./ButtonHamburger";
import { Search } from "./Search";
import { User } from "./User";

type Props = {
   username: string | null
}

export const Header = ({ username }: Props) => (
   <header className={styles.header}>
      <ButtonHamburger handleClick={() => { console.log('ok') }} collapsed />
      <Search username={username} />
      <User username={username} />
   </header>
)