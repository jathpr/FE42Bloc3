import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './Components/Search/SearchProvider';
import { MoviesProvider } from './Components/MoviesProvider';
import { FilterProvider } from './Components/Filter/FilterProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchProvider>
    <FilterProvider>
      {/* <MoviesProvider> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </MoviesProvider> */}
      </FilterProvider>
    </SearchProvider>
  </React.StrictMode>
);

