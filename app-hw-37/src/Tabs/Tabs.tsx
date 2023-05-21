import React, { ReactNode, useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Store/store';
import './tabs.css';
/* type tabsProps = {
	titles: string[],
	activeTab: string
}
export const Tabs = ({ titles, activeTab }: tabsProps) => (
	<ul className='tabs'>
		{titles.map((title) => {
			if (activeTab === title) {
				return <li className='tabs__tab tabs__tab--active'><Link to='/posts'><button className='tab__btn'>{title}</button></Link></li>
			} else {
				return <li className='tabs__tab'><button className='tab__btn'>{title}</button></li>
			}
		})}

	</ul>
) */
type Props = {
	tabs: {
		tabName: string,
		tabLink: string
	}[]
}
export const Tabs = ({ tabs }: Props) => {
	const [activeTab, setActiveTab] = useState(tabs[0].tabName)
	const theme = useAppSelector((state) => state.theme.themeColor)
	return (<>
		<div className='tabs'>
			<Link to='/posts' className={tabs[0].tabName === activeTab ? 'tabs__tab tabs__tab--active' : 'tabs__tab'}><button className='tab__btn' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }} onClick={() => setActiveTab(tabs[0].tabName)}>{tabs[0].tabName}</button></Link>
			<Link to='/posts/favourites' className={tabs[1].tabName === activeTab ? 'tabs__tab tabs__tab--active' : 'tabs__tab'}><button className='tab__btn' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }} onClick={() => setActiveTab(tabs[1].tabName)}>{tabs[1].tabName}</button></Link>
			<Link to='/posts/popular' className={tabs[2].tabName === activeTab ? 'tabs__tab tabs__tab--active' : 'tabs__tab'}><button className='tab__btn' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }} onClick={() => setActiveTab(tabs[2].tabName)}>{tabs[2].tabName}</button></Link>
			{/* {tabs.map((tab) => <div className={tab.tabName === activeTab ? 'tabs__tab tabs__tab--active' : 'tabs__tab'}><button className='tab__btn' style={theme === 'light' ? { color: 'rgb(75, 73, 73)' } : { color: 'white' }} onClick={() => setActiveTab(tab.tabName)}>{tab.tabName}</button></div>)} */}
		</div>
	</>)
}