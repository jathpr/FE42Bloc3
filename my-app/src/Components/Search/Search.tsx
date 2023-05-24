import { useState } from 'react'
import './Search.css'
import { ReactComponent as MagicGlass } from './magicGlass.svg';


type Props = {
    onSearch: (search: string) => void
}

export const Search = ({ onSearch }: Props) => {
    const [searchResult, setSearchResult] = useState('')

    return <div>
        <input className='searchInput' type='search' placeholder="Search..." value={searchResult} onChange={(e) => { setSearchResult(e.currentTarget.value) }}></input>
        <button className='searchButton' onClick={() => onSearch(searchResult)}>
            <MagicGlass/>
        </button>
    </div>
}