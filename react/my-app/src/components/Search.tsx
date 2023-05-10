import "../styles/search.css";

type SearchProps = { value: string }

export const Search = () => {

    return (
        <div className="header-search">
            <input className="header-search__input" type="text" placeholder="search" />
            <button className="header-search__button"></button>
        </div>
    )
}
