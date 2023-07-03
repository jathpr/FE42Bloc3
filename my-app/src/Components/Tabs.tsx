import { useState } from "react";
import styles from "../css/Tabs.module.css";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setActiveTab } from "../store/tabs";

type Props = {
   tabsArr: string[],
   // activeTab: string,
   disabledTabs?: string[]
}

export const Tabs = ({ tabsArr, disabledTabs }: Props) => {

   // const [activeTab, setActiveTab] = useState('All')

   const activeTab = useAppSelector(state => state.tabs.tab)
   const dispatch = useAppDispatch()

   const tabsJSXarr = tabsArr.map(tab => {

      // if (disabledTabs?.includes(tab)) {
      //    return <li className={`${styles.tab} ${styles.disabled}`}>{tab}</li>
      // }

      const switchTab = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
         console.log('click switchTab')
         // console.log('target', e.target.innerText)
         // console.log('target', (e.target))
         // activeTab = tab
         dispatch(setActiveTab(tab))
         console.log("🚀 ~ file: Tabs.tsx:31 ~ switchTab ~ tab:", tab)
         console.log("🚀 ~ file: Tabs.tsx:22 ~ switchTab ~ activeTab:", activeTab)
      }

      if (tab === activeTab) {
         return <li id={tab} onClick={switchTab} className={`${styles.tab} ${styles.active}`}>{tab}</li>
         // return <li id={tab} onClick={(e) => { (e.target).id && console.log(e.target.id) }} className={`${styles.tab} ${styles.active}`}>{tab}</li>
         // return <li className={`${styles.tab} ${styles.active}`}><button onClick={(e) => {}}>{tab}</button></li>
      }

      return <li onClick={switchTab} className={styles.tab}>{tab}</li>
      // return <li className={styles.tab}><button>{tab}</button></li>
   })

   return <div className={styles['tabs--wrapper']}>
      {tabsJSXarr}
   </div>
}