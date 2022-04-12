import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import Router from './router'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


