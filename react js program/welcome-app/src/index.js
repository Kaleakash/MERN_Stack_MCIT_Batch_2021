import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';    // if 
import reportWebVitals from './reportWebVitals';

//This code is use to send App component to actual dom using root id
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
