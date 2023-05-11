import { useState } from "react";
import "../styles/search.css";

export const Search = () => {

    const [searchValue, setSearchValue] = useState("")

    return (
        <div className="header-search">
            <input className="header-search__input" type="search" placeholder="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <button className="header-search__button" onClick={() => searchValue}></button>
        </div>
    )
}
