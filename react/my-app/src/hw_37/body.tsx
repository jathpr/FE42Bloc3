import { ReactNode } from "react"

export const Body = () => (
    <div className="body">
        <Tabs></Tabs>
    </div>
)

type Tab = {
    name: string,
    enabled: boolean,
    handleClick?: () => void
}

const tabs: Tab[] = [
    {
        name: 'some tab',
        enabled: false,
    },
    {
        name: 'more tab',
        enabled: false,
    },
    {
        name: 'even more tab',
        enabled: false,
    }
]

const Tabs = () => (
    <div className="tabs-wrapper">
        <h1 className="body__title">TABS</h1>
        <div className="tabs-items">
            {tabs.map((tab) => <div className="tabs__item">{tab.name}</div>)}
        </div>
    </div>
)
