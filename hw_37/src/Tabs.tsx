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
        {tabsArray.reduce((acc: any[] = [], arr) => {

            
            let tabClassNames : string = `tabs__tab ${arr.active ? "tabs__tab--active" : ""}`;
            
            if(arr.disabled){
                tabClassNames += `tabs__tab--disabled`
            }

            acc.push(
                <li className={tabClassNames}>
                    <button className="tab__btn" disabled={arr.disabled}>
                        {arr.title}
                    </button>
                </li>
            );

            return acc
        }, [])}
    </ul>)

};