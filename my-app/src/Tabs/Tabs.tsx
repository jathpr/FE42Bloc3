import s from './tabs.module.css';


type Props = {
    tabs: string[],
    handleClick: () => void,
}




export const Tabs = ({tabs, handleClick}: Props) => (
    <div>
        {tabs&&tabs.map(el => <span className={s.tab_list} onClick={handleClick} > {el}</span>)}
    </div>
);