import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContextProvider from './contexts/AppContextProvider';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
  ,
  document.getElementById('root')
);

