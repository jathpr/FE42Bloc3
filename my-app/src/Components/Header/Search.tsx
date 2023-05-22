import { useState } from 'react';
import styles from './Search.module.css';

type Props = { onSearch: (search: string) => void }

export const Search = ({onSearch}: Props) => {

    const [searchString, setSearchString] = useState('')

    return <><input value={searchString} className={styles.search_input} placeholder='Search...' onChange={(e) => setSearchString(e.currentTarget.value)} />
    <button className={styles.button_search} onClick={()=>onSearch(searchString)}>Search</button></>
}