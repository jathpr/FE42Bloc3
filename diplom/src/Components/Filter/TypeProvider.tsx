import React, { useState } from "react"

type PropsType ='movies' | 'series' | 'episode' | ''

    export const TypeProvider = ({ children }: { children: React.ReactNode }) => {
        const [type, setType] = useState<PropsType>('')

        return <TypeContext.Provider value={{ type, setType }}>
            {children}
        </TypeContext.Provider>
    }


export const TypeContext = React.createContext<{ type: PropsType, setType: (s: PropsType) => void }>({ type: '', setType: () => { } })