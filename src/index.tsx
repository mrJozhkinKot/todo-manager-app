import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
 <Provider store={store}>
  <React.StrictMode>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </React.StrictMode>
 </Provider>
);
