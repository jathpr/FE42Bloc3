import s from './tabs.module.css';


type Props = {
    tabs: string[],
    activeTab: string
}




export const Tabs = ({ tabs, activeTab }: Props) => (
    <div>
        {tabs && tabs.map(el =>
            <span className={(activeTab === el) ? s.active : s.tab_list}> {el}</span> 
        )}
    </div>
);