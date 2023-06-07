import './App.css';
import { Aside } from './Components/Aside/Aside';
import { Header } from './Components/Header/Header';
import { MoviesList } from './Components/Movies/MoviesList';

export function App() {
  return (
    <div>
      <Aside />
      <Header />
      <MoviesList />

    </div>
  );
}


