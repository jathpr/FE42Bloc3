import React, { useContext } from 'react'
import style from './Filter.module.css'
import { useState } from 'react'
import { FilterContext } from './FilterProvider'
import { TypeContext } from './TypeProvider'

export const Filter = () => {
    const { setYear } = useContext(FilterContext)
    const [inputYear, setInputYear] = useState('')
    const { type, setType } = useContext(TypeContext)

    const showAll = () => {
        setYear(inputYear)
    }

    const resetAll = () => {
        setYear('')
        setInputYear('')
        setType('')
    }

    return <div className={style.filter_container}>
        <div className={style.filter_year}>
            <p className={style.filter_text}>Sort by year</p>
            <input className={style.year_input} type="number" min={1900} onChange={(e) => setInputYear(e.currentTarget.value)} value={inputYear} placeholder='Write a year' />
        </div>

        <div className={style.filter_type}>
            <p className={style.filter_text}>Sort by type</p>
            <div className={style.type_wrap}>
                <div onClick={() => type === "movies" ? setType('') : setType('movies')} className={type === 'movies' ? style.movie_type_active : style.movie_type}>movie</div>
                <div onClick={() => type === "series" ? setType('') : setType('series')} className={type === 'series'? style.movie_type_active : style.movie_type}>series</div>
                <div onClick={() => type === "episode" ? setType('') : setType('episode')} className={type === 'episode' ? style.movie_type_active : style.movie_type}>episode</div>
            </div>
        </div>
        <button className={style.btn} onClick={() => showAll()}>Show all</button>
        <button className={style.btn} onClick={() => resetAll()}>Reset filters</button>
    </div>
}