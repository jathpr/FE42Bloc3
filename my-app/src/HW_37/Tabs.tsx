import style from "./Tabs.module.css";
import { useContext } from 'react';
import { ThemeContext } from "../Components/ThemeProvider";

type Props = {
    tabs: string[],
    activeTab: string
}

export const Tabs = ({tabs, activeTab}: Props) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
    <div className={theme === 'light'? style.table:style.table_dark} >
        <p className={style.header}>TABS</p>
        {tabs.map(elem => <span className = {(activeTab===elem) ?style.tabs_active : style.tabs}>{elem} </span>)}
    </div>
    </>
  )
}