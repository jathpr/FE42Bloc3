import React, { useState } from "react";
import styles from "../css/Search.module.css";

type Props = {
   username: string | null
}

type State = {
   value: string
}

export const Search = ({ username }: Props) => {

   const [searchValue, setSearchValue] = useState('');

   return <div className={username ? styles.search : styles['search-no-auth']}>
      <input placeholder="Search" className={styles['search__input']} value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} type="text" />
      <button className={styles['search__btn']}>Search</button>
   </div>
}