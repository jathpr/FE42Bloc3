import { useContext, useEffect, useRef, useState } from 'react'
import style  from "../Search/Search.module.css";
import { SearchContext } from './SearchProvider';
import { getMovies } from '../Movies/movies';
// import { ThemeContext } from "../ThemeProvider";


export const Search = () => {
  const [search, setSearch] = useState("");
  const { setSearchString } = useContext(SearchContext);
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {setSearchString(search)}
  };
  return (
    <div className={style.search_wrapper}>
      <input
        className={style.search}
        placeholder="search..."
        value={search}
        onKeyDown={handleKeyDown}
        onChange={(event) => {
          setSearch(event.currentTarget.value);
        }}
      />
      {/* <button className={style.button} onClick={() => setSearchString(search)}>Search</button> */}
    </div>
  );
};