import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { SearchProvider } from './Components/SearchProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchProvider>
  </React.StrictMode>
);

