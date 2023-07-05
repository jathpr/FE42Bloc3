import { useContext, useEffect, useState } from 'react'
import {  Movie, getMovies } from './movies'
import { RenderMovie } from './RenderMovie'
import { SearchContext, TypeContext, YearContext } from '../Search/SearchProvider'
import style from './Movies.module.css'
import styles from '../Content/Content.module.css'


export const RenderMoviesList = () => {
  const [page, setPage] = useState(1);
  const { yearString } = useContext(YearContext);
  const [cards, setCards] = useState<Movie[]>([]);
  const { searchString } = useContext(SearchContext);
  const {type} = useContext(TypeContext)

  useEffect(() => {searchString && getMovies(searchString, page, yearString, type).then((movies) => setCards(movies));
  }, [searchString, yearString, type]);
  useEffect(()=> {searchString && getMovies(searchString, page, yearString, type).then((movies) => setCards([...cards, ...movies]));
  }, [page])
  useEffect(()=> {searchString && getMovies(searchString, page, yearString, type).then((movies) => setCards(movies));
  }, [yearString])
   useEffect(()=> {searchString && getMovies(searchString, page, yearString, type).then((movies) => setCards(movies));
  }, [type])
  
  
  
  if (!cards) return <>
   <div className={styles.conten_noresults}>No results</div>
  </>
  return (
      <>
        <div className={style.movielist_wrapper}>
          {cards.map((item) => (<RenderMovie movie={item} />))}
        </div>
        <div className={style.div_showmore}>
          <button className={cards.length>9? style.show_more:style.show_more_none} onClick={() => setPage(page + 1)}>Show more</button>
        </div>
      </>
    );
} 
