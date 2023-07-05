import { useContext, useState } from "react";
import style from "./Filter.module.css";
import { YearContext } from "../Search/SearchProvider";
import { TypeContext } from "../Search/SearchProvider";


export const Filter = () => {
  const [year, setYear] = useState("");
  const [movie, setMovie] = useState(false);
  const [series, setSeries] = useState(false);
  const [episode, setEpisode] = useState(false);
  const { setYearString } = useContext(YearContext);
  const { setType } = useContext(TypeContext);
  const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Enter") {
          setYearString(year);
          setYear('')
        }
    };
    
  const movieClick = () => {
    setMovie(!movie)
    setSeries(false)
    setEpisode(false)
    setType('movie')
}
const seriesClick = () => {
    setSeries(!series)
    setEpisode(false)
    setMovie(false)
    setType('series')
}
const episodeClick = () => {
    setEpisode(!episode)
    setMovie(false)
    setSeries(false)
    setType('episode')
}

  return (
      <div className={  style.filter}>
        <h2>Filter</h2>
        <input
          className={style.search_year}
          type="number"
          max='2024'
          min='1895'
          placeholder="enter year"
          value={year}
          onKeyDown={handleKeyDown}
          onChange={(event) => {
            setYear(event.currentTarget.value);
          }}

        />
        <div className={style.type_selection}>
          <div className={movie===false?style.type:style.type_click} onClick={()=> movieClick()}>Movie</div>
          <div className={series===false?style.type:style.type_click} onClick={()=>seriesClick()}>Series</div>
          <div className={episode===false?style.type:style.type_click} onClick={()=>episodeClick()}>Episode</div>
        </div>

          <button className={style.reset}>reset</button>
      </div>
  );
};
