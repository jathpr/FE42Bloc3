import { ReactNode } from "react"

type Tabs = {
    children: ReactNode,
    tabs?: string[],
    activeTabName?: string 
}

export const Tabs = ({children, tabs, activeTabName}: Tabs) => (
    <div>{children}</div>
)