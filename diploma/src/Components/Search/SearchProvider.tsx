import { useState } from "react"
import React from "react"

const setLoadSearchString = () => {
    const kino = ['terminator','matrix','star wars', 'movie', 'cat', 'film', 'friends', 'love', 'travel', 'cartoon','dog', 'animal']
    return kino[Math.floor(Math.random() * kino.length)]
}


export const SearchProvider = ({children}:{children: React.ReactNode}) => {
   
    const[searchString, setSearchString] = useState(setLoadSearchString)
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

export const TypeProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState("");
  return (
    <TypeContext.Provider value={{ type, setType }}>
      {children}
    </TypeContext.Provider>
  );
};
export const TypeContext = React.createContext <{ type: string, setType: (s:string) => void }>({type: '', setType: ()=>{}})
