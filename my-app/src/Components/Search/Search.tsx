import { useContext, useState } from 'react'
import style  from "../Search/Search.module.css";
import { SearchContext } from '../SearchProvider';
import { ThemeContext } from "../ThemeProvider";


export const Search = () => {
  const [search, setSearch] = useState("")
  const {setSearchString} = useContext(SearchContext)
  const { theme } = useContext(ThemeContext)

  return (
  <>
    <input
      className={theme === 'light'?style.search:style.search_dark}
      placeholder="search..."
      value= {search}
      onChange={(e) => {
        setSearch(e.currentTarget.value);
      }}
    />
    <button className={theme === 'light'?style.button_search:style.button_search_dark} onClick={() => setSearchString(search)}>Search</button>
  </>
  );
};