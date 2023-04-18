import styles from "./Tabs.module.css"

export const tabNames = ['All', 'My Favorites', 'Popular']

type Tabs = {
    tabs: string[],
    activeTabName: string,
}

export const Tabs = ({tabs, activeTabName}: Tabs) => (
    <ul className={styles.tabs}>
        {tabs.map(tab=><li className={tab===activeTabName? (styles.tabs--active): classB} key={tab.id}>{tab}</li>)}
    </ul>
)