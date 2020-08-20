import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// mxb - Code that I've added.
var element = React.createElement('h2', { className: 'greeting' }, '"Hello world!", shouts Meintjes');

ReactDOM.render(
  // mxb - Code that I've removed.
  // <React.StrictMode>
  //  <App />
  // </React.StrictMode>,
  element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
