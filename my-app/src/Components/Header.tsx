import styles from "../css/Header.module.css";
import { ButtonHamburger } from "./ButtonHamburger";
import { Search } from "./Search";
import { User } from "./User";

type Props = {
   username: string | null,
   clickSearch: (inputValue: string) => void
}

export const Header = ({ username, clickSearch }: Props) => {

   const getSearchValue = (inputValue: string) => {
      clickSearch(inputValue)
   }

   return (
      <header className={styles.header}>
         <ButtonHamburger handleClick={() => { console.log('ok'); }} collapsed />
         <Search username={username} clickSearch={getSearchValue} />
         <User username={username} />
      </header>
   );
}