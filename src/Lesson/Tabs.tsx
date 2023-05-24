import { ReactNode, useState } from "react";

type Props = { tabs: { tabComponent: ReactNode; tabName: string }[] };

export const Tabs = ({ tabs }: Props) => {
  const [tab, setTab] = useState(tabs[0].tabComponent);
  return (
    <>
      <div>
        {tabs.map((tab) => (
          <button onClick={() => setTab(tab.tabComponent)}>tab.tabName</button>
        ))}
      </div>
      {tab}
    </>
  );
};
