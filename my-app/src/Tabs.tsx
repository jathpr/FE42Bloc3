import { type } from "os";
import style from "./Tabs.module.css";

type Props = {
    tabs: string[],
    handleclick: ()=>void,
}

export const Tabs = ({tabs, handleclick}: Props) => (
    <div className={style.table} >
        <p className={style.header}>TABS</p>
        {tabs.map(elem => <span className = {style.tabs} onClick={handleclick} >{elem} </span>)}
    </div>
)