import './css/tabs.css';

export type TabsProps = {
    title: string;
    active?: boolean | undefined;
    disabled?: boolean
};

export const Tabs = ({ tabsArray }: { tabsArray: TabsProps[] }) => {
    if (!tabsArray.length) {
        return null;
    }
    return (<ul className="tabs">
        {tabsArray.map((arr) => {
            let tabClassNames: string = `tabs__tab ${arr.active ? "tabs__tab--active" : ""}`;

            if (arr.disabled) {
                tabClassNames += `tabs__tab--disabled`;
            }

            return (
                <li className={tabClassNames}>
                    <button className="tab__btn" disabled={arr.disabled}>
                        {arr.title}
                    </button>
                </li>
            );
        })}
    </ul>)

};