import styles from "./tabs.module.css"

type Tabs = {
    tabs?: string[],
    activeTabName?: string
}

export const Tabs = ({tabs, activeTabName }: Tabs) => (
        <ul className={styles.tabs}>
            {tabs?.map(el => <li>{el}</li>)}
        </ul>
)