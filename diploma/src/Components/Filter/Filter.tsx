import { useContext, useState } from "react";
import style from "./Filter.module.css";
import { YearContext } from "../Search/SearchProvider";



export const Filter = () => {
    const [year, setYear] = useState('');
  const { setYearString } = useContext(YearContext);
    const handleKeyDown = (event: { key: string }) => {
        if (event.key === "Enter") {
            setYearString(year)
        }
    };
    return (
        <div className={style.filter_wrapper}>
      <div className={style.filter}>Filter
        <input
        className={style.search_year}
        placeholder="enter year"
        value={year}
        onKeyDown={handleKeyDown}
        onChange={(event) => {
          setYear(event.currentTarget.value);
        }}>
        </input>
      </div>
    </div>
  );
};
