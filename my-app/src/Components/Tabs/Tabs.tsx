import { useContext } from 'react';
import s from './tabs.module.css';
import { ThemeContext } from '../ThemeProvider';


type Props = {
    tabs: string[],
    activeTab: string
}

export const Tabs = ({ tabs, activeTab }: Props) => {
    const { theme } = useContext(ThemeContext)

    return <div className={theme === 'light' ? s.tabs_wrapper : s.tabs_wrapper_dark}>
        {tabs && tabs.map(el =>
            <span className={(activeTab === el) ? s.active : s.tab_list}> {el}</span>
        )}
    </div>
};