import { useState } from "react"
import React from "react"

export const SearchProvider = ({children}:{children: React.ReactNode}) => {
    const[searchString, setSearchString] = useState('terminator')

    return <SearchContext.Provider value = {{searchString, setSearchString}}>
        {children}
    </SearchContext.Provider>
}

export const SearchContext = React.createContext <{ searchString: string, setSearchString: (s:string) => void }>({searchString: '', setSearchString: ()=>{}})

export const YearProvider = ({children}:{children: React.ReactNode}) => {
    const[yearString, setYearString] = useState('')

    return <YearContext.Provider value = {{yearString, setYearString}}>
        {children}
    </YearContext.Provider>
}

export const YearContext = React.createContext <{ yearString: string, setYearString: (s:string) => void }>({yearString: '', setYearString: ()=>{}})