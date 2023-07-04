import { useState } from "react";
import styles from "../css/Header.module.css";
import { ButtonHamburger } from "./ButtonHamburger";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { User } from "./User";
import { useAppSelector } from "../store/store";

type Props = {
   // username?: string,
   clickSearch: (inputValue: string) => void
}

export const Header = ({ clickSearch }: Props) => {

   const [displayMenu, setDisplayMenu] = useState(false)

   const username = useAppSelector(state => state.auth.userUsername)

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
            <Search clickSearch={getSearchValue} />
            {/* <Search username={username} clickSearch={getSearchValue} /> */}
            <User />
            {/* <User username={username} /> */}
         </header>
         {displayMenu && <Menu username={username} />}

      </>
   );
}