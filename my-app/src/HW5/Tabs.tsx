import styles from "./css/Tabs.module.css";

type Props = {
   tabsArr: string[],
   activeTab: string,
   disabledTabs?: string[]
}

export const Tabs = ({ tabsArr, activeTab, disabledTabs }: Props) => {

   const tabsJSXarr = tabsArr.map(tab => {

      if (disabledTabs?.includes(tab)) {
         return <li className={`${styles.tab} ${styles.disabled}`}>{tab}</li>
      }

      if (tab === activeTab) {
         return <li className={`${styles.tab} ${styles.active}`}>{tab}</li>
      }

      return <li className={styles.tab}>{tab}</li>
   })

   return <div className={styles['tabs--wrapper']}>
      {tabsJSXarr}
   </div>
}