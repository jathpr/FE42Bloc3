import { useState } from "react";
import "../styles/search.css";

type SearchProps = {
    searchStringValue: ({}) => void
}

export const Search = ({searchStringValue}: SearchProps) => {

    const [searchValue, setSearchValue] = useState("")
    const getPostsByRequest = () => {
        searchStringValue(searchValue)
    }

    return (
        <div className="header-search">
            <input className="header-search__input" 
                type="search"
                placeholder="search" 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="header-search__button"
                onClick={() => getPostsByRequest}>
            </button>
        </div>
    )
}
