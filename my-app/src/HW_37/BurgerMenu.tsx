import { useContext } from "react";
import style from "./BurgerMenu.module.css";
import { useState } from "react";
import styles  from "../Components/Search/Search.module.css";
import { Search } from "../Components/Search/Search";
import { ThemeButton } from "../Components/Theme/Theme";
import { ThemeContext } from "../Components/ThemeProvider";

type Props = {
  enabled: boolean;
};


export const ButtonComponent  = ({ enabled }: Props) => {  
  const [isEnabled, setIsEnabled] = useState(enabled)
  const { theme } = useContext(ThemeContext)
  const click = () => {
    setIsEnabled(!isEnabled)
  };

    return (
      <div className={theme === 'light'? styles.header:styles.header_dark}>
      <button className={theme === 'light'?style.burger:style.burger_dark} onClick={click}>
        {isEnabled ? <Burger /> : <ClosedButton />}
      </button>
      <Search />
      <ThemeButton />
      </div>
    );
}

const Burger = () => (
  <div className={style.line}>
    <span className={style.line_first}></span>
    <span className={style.line_second}></span>
    <span className={style.line_third}></span>
    <span className={style.line_forth}></span>
  </div>
);

const ClosedButton = () => (
  <div className={style.button_close}>
    <span className={style.close_line_first}></span>
    <span className={style.close_line_second}></span>
  </div>
);
