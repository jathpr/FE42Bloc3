import { useContext, useState } from 'react';
import styles from './Search.module.css';
import { SearchContext } from '../SearchProvider';


export const Search = () => {

    const [search, setSearch] = useState('')

    const {setSearchString} = useContext(SearchContext)

    return <><input value={search} className={styles.search_input} placeholder='Search...' onChange={(e) => setSearch(e.currentTarget.value)} />
    <button className={styles.button_search} onClick={()=>setSearchString(search)}>Search</button></>
}