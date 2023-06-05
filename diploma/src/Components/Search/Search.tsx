import { useContext, useState } from 'react'
import style  from "../Search/Search.module.css";
import { SearchContext } from './SearchProvider';
// import { ThemeContext } from "../ThemeProvider";


export const Search = () => {
  const [search, setSearch] = useState("")
  const {setSearchString} = useContext(SearchContext)
//   const { theme } = useContext(ThemeContext)

  return (
  <>
    <input
      className={style.search}
      placeholder="search..."
      value= {search}
      onChange={(e) => {
        setSearch(e.currentTarget.value);
      }}
    />
  </>
  );
};