import { useState } from "react";
import styles from "../css/Search.module.css";

type Props = {
   username: string | null,
   clickSearch: (inputValue: string) => void
}

export const Search = ({ username, clickSearch }: Props) => {

   const [searchValue, setSearchValue] = useState('');

   const handleSearch = () => {
      clickSearch(searchValue);
   }

   return <div className={username ? styles.search : styles['search-no-auth']}>
      <input placeholder="Search" className={styles['search__input']} value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} type="text" />
      <button onClick={handleSearch} className={styles['search__btn']}>Search</button>
   </div>
}