import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './app/index.css';
import { BurgerProvider } from './app/state/Burger/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BurgerProvider>
      <App />
    </BurgerProvider>
  </React.StrictMode>,
);
