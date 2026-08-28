import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dashboard } from '../components/Dashboard';
import '../app/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Dashboard isExtension={true} />
  </React.StrictMode>
);
