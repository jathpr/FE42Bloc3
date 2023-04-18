import React from "react"
import "./Tabs.css"

export const tabNames = ['All', 'My Favorites', 'Popular']

type Tabs = {
    tabs: string[],
    activeTabName: string,
    active: boolean,
}

export const Tabs = ({tabs, activeTabName}: Tabs) => (
    <ul className='tabs'>
        {tabs.map(tab=><li key={tab} className={tab===activeTabName ? 'tabs--active': ''}>{tab}</li>)}
    </ul>
)

