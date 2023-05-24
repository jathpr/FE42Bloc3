import { ReactNode, useState } from "react"
import "../styles/tabs.css"
import { TabContent } from "./TabContent"
import { TabContent2 } from "./TabContent2"
import { Posts } from "./Posts"

export const tabNames = [{ tabComponent: <Posts />, tabName: "All" }, { tabComponent: <TabContent />, tabName: "My Favorites" }, { tabComponent: <TabContent2 />, tabName: "Popular" }]

type Tabs = {
    tabs: {
        tabComponent: ReactNode,
        tabName: string
    }[]
}

export const Tabs = ({ tabs }: Tabs) => {

    const [tab, setTab] = useState(tabs[0].tabComponent)

    return (
        <>
            <div className="body-tabs">
                {tabs.map((tab) => (
                    <button className="button tabs__button" onClick={() => setTab(tab.tabComponent)}>{tab.tabName}</button>
                ))}
            </div>
            {tab}
        </>
    )
}
