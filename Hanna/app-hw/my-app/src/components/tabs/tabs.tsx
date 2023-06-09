import React, { ReactNode }from 'react';
import './tabs.css';

type Props = {
	defaultState?: boolean,
	// click: () => void, 
	// children: ReactNode,
}

type State = { 
    clicked: boolean,
}

export class Tabs extends React.Component <Props, State> {
    // state = { clicked: !!this.props.defaultState }
    // handleClick = () => {
    //     this.props.click()
    //     this.setState( {clicked: !this.state.clicked} )
    // }

    render() {
        return (
            <div className='tabs'>
                <div className='tabs__content'>
                    <button className='tabs__content__item'>All</button>
                    <button className='tabs__content__item'>My favorites</button>
                    <button className='tabs__content__item' disabled={true}>Popular</button>
                </div>
            </div>
        )
    }
}

