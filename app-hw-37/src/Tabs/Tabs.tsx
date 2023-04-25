import React, { ReactNode } from 'react';
import './tabs.css';
type tabsProps = {
	titles: string[],
	activeTab: string,
	enabled?: boolean
}
export const Tabs = ({ enabled, titles, activeTab }: tabsProps) => (
	<ul className='tabs'>
		{titles.map((title) => {
			if (activeTab === title) {
				return <li className='tabs__tab tabs__tab--active'><button className='tab__btn' disabled={!enabled}>{title}</button></li>
			} else {
				return <li className='tabs__tab'><button className='tab__btn' disabled={!enabled}>{title}</button></li>
			}
		})}

	</ul>
)