import style from "./Title.module.css"
import { useContext } from 'react';
import { ThemeContext } from "./Components/ThemeProvider";

export const Title = () => {
  const { theme } = useContext(ThemeContext)
return (
    <>
    <div className={theme === 'light'? style.title:style.title_dark}>Sign In</div>
    </>
  );
};