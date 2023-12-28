import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { ToDoProvider } from './context/ToDo.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToDoProvider>
        <App />
      </ToDoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
