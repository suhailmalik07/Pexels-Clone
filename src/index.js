import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContextProvider from './Context/AppContextProvider';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
  ,
  document.getElementById('root')
);

