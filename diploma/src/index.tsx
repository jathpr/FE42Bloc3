import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './Components/Search/SearchProvider';
import { YearProvider } from './Components/Search/SearchProvider';
import { TypeProvider } from './Components/Search/SearchProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchProvider>
      <YearProvider>
        <TypeProvider>
          <App />
        </TypeProvider>
      </YearProvider>
    </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
