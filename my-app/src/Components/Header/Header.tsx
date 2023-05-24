import { useEffect, useState } from 'react';
import { Button } from './ButtonClass';
import { Search } from './Search';
import styles from './button.module.css';
import { Post, getPosts } from '../Posts/posts';
import { on } from 'events';

type Props = {onSearch: (str: string)=> void}

export const Header = () => {
     

    return <div className={styles.header_wrapper}>
        <Button visible handleClick={() => console.log('ok')} />
        <Search />
    </div>
}