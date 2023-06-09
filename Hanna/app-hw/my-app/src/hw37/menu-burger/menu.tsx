import React from 'react';
import './menu.css';
import { Burger } from './burger';
import search from '../../img/search.svg';
import profile from '../../img/profile_picture.jpg'

export const Menu = () => (
    <div className = 'menu'>
        <div className = 'menu__wrapper'>
            <Burger click={() => console.log('Click')}>
            </Burger>
            <input className = 'menu__wrapper__input' type="text" placeholder='Search...'/>
            <div className = 'menu__wrapper__search'>
                <img src= {search} />
            </div>
            <div className = 'user__profile'>
                <div className = 'profile__picture'>
                    <img src={profile} />
                </div>
                <div className = 'profile__name'>
                    <p>Hanna Dzenis</p>
                </div>
            </div>
        </div>
    </div>
)