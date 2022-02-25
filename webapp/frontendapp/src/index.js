import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import UserScreen from './screens/User/UserScreen';
import LoginScreen from './screens/Login/LoginScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
//import path from 'path';
//import express from 'express';

/*App.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

App.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});*/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
); //<App /> LoginScreen <React.StrictMode> <BrowserRouter> </BrowserRouter>

// virtual0023-eurecapro.unileon.es


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
