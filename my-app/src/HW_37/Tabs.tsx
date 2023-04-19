import style from "./Tabs.module.css";

type Props = {
    tabs: string[],
    activeTab: string
}

export const Tabs = ({tabs, activeTab}: Props) => (
    <div className={style.table} >
        <p className={style.header}>TABS</p>
        {tabs.map(elem => <span className = {(activeTab===elem) ?style.tabs_active : style.tabs}>{elem} </span>)}
    </div>
)