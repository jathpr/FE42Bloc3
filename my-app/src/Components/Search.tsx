import { useState } from "react";
import styles from "../css/Search.module.css";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getPostsThunk } from "../store/post";

type Props = {
   // username?: string,
   clickSearch: (inputValue: string) => void
}

export const Search = ({ clickSearch }: Props) => {

   const [searchValue, setSearchValue] = useState('');

   const username = useAppSelector(state => state.auth.userUsername)
   const isAuthorized = useAppSelector(state => state.auth.isAuthorized)

   const dispatch = useAppDispatch()

   const handleSearch = () => {
      console.log('Component Search: ', searchValue);

      // clickSearch(searchValue);
      dispatch(getPostsThunk({ searchInputValue: searchValue, isForUser: false }))

      setSearchValue('')
   }

   return <div className={(username && isAuthorized) ? styles.search : styles['search-no-auth']}>
      <input placeholder="Search" className={styles['search__input']} value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} type="text" />
      <button onClick={handleSearch} className={styles['search__btn']}>Search</button>
   </div>
}