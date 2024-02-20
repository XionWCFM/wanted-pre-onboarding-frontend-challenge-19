import React from 'react';
import ReactDOM from 'react-dom/client';
import EntryPoint from './@app/root/entry-point.tsx';
import './@app/style/tailwind.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EntryPoint />
  </React.StrictMode>,
);
