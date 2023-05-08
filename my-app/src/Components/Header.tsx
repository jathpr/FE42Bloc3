import { useState } from "react";
import styles from "../css/Header.module.css";
import { ButtonHamburger } from "./ButtonHamburger";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { User } from "./User";

type Props = {
   username?: string,
   clickSearch: (inputValue: string) => void
}

export const Header = ({ username, clickSearch }: Props) => {

   const [displayMenu, setDisplayMenu] = useState(false)

   const onBurgerClick = (isCollapsed: boolean) => {
      // console.log('ok', isCollapsed)
      setDisplayMenu(isCollapsed)

   }

   const getSearchValue = (inputValue: string) => {
      clickSearch(inputValue)
   }


   return (
      <>
         <header className={styles.header}>
            <ButtonHamburger handleClick={onBurgerClick} collapsed />
            <Search username={username} clickSearch={getSearchValue} />
            <User username={username} />
         </header>
         {displayMenu ? <Menu username={username}></Menu> : ''}

      </>
   );
}