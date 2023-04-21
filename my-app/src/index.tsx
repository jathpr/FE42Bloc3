import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './App';
// import { Hw37 } from './HW37/Hw-37';
import { Hw38 } from './HW38/Hw-38';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hw37 /> */}
    <Hw38/>
  </React.StrictMode>
);