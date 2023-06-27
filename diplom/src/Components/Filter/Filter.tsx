import React, { useContext } from 'react'
import style from './Filter.module.css'
import { useState } from 'react'
import { FilterContext } from './FilterProvider'

export const Filter = () => {
    const {year, setYear} = useContext(FilterContext)
    const [inputYear, setInputYear] = useState('')
    console.log("🚀 ~ file: Filter.tsx:8 ~ Filter ~ inputYear:", inputYear)
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(true);
    const [active3, setActive3] = useState(true);
    

    return <div className={style.filter_container}>
        <div className={style.filter_year}>
            <p className={style.filter_text}>Sort by year</p>
            <input className={style.year_input} type="text" onClick={(e) => setInputYear(e.currentTarget.value)} placeholder='Write a year' />
        </div>

        <div className={style.filter_type}>
            <p className={style.filter_text}>Sort by type</p>
            <div className={style.type_wrap}>
                <div onClick={() => setActive1(!active1)} className={active1 ? style.movie_type : style.movie_type_active}>movie</div>
                <div onClick={() => setActive2(!active2)} className={active2 ? style.movie_type : style.movie_type_active}>series</div>
                <div onClick={() => setActive3(!active3)} className={active3 ? style.movie_type : style.movie_type_active}>episode</div>
            </div>
        </div>
        <button className={style.btn} onClick={() => setYear(inputYear)}>Show all</button>
    </div>
}