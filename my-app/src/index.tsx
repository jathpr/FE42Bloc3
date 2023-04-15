import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { App } from './App';
import { Hw37 } from './HW37/hw-37';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Hw37 />
  </React.StrictMode>
);