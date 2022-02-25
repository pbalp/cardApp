import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Router, Route, Routes, useLocation } from 'react-router-dom';

import LoginScreen from './screens/Login/LoginScreen';
import UserScreen2 from './screens/UserScreen2';
import UserScreen from './screens/User/UserScreen';
import HomeScreen from './screens/Home/HomeScreen';
import AcademicScreen from './screens/Academic/AcademicScreen';
import CalendarScreen from './screens/Calendar/CalendarScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import Navigation from './screens/Navigation';

export default function App() { //location 
  const [token, setToken] = useState();
  const [navigation, setNavigation] = useState(false);
  //const { pathname } = useLocation();
  localStorage.setItem("navigation", false);
  let loc = useLocation();

  window.addEventListener("storage", (e) => {
    console.log("Change url ", )
    {localStorage.getItem('navigation') !== true && <Navigation />}
  });

  useEffect(() => {
    console.log("Change url ", window.location.pathname)
  });
  if(!token) {
    //return <UserScreen />
    //return <LoginScreen token={setToken} />
  }

  /*
      <useLocation> 
        {({ location }) => { 
          console.log("LOCATION");
          if (location.pathname !== "/login") { 
            console.log("LOCATION NO LOGIN");
            return <Navigation />; 
          } }
        }
      </useLocation>
  */

/*
        <Routes>
          <Route exact="true" path="/login" element={<LoginScreen />} />
        </Routes>
*/
//

  return ( // <Route path="/user" element={<UserScreen />} /> {window.location.pathname !== "/login" && <Navigation />}
    <div className="App">
      

        {
          localStorage.getItem('navigation') !== true //&& 
          /*(
            window.location.pathname === '/user/home' || window.location.pathname === '/user/academic' || 
            window.location.pathname === '/user/calendar' || window.location.pathname === '/user/profile'
          )*/
          && loc.pathname !== '/login' && <Navigation />
        }
        <Routes>
          <Route exact="true" path="/login" element={<LoginScreen />} />
          <Route exact="true" path="/user/home" element={<HomeScreen />} />
          <Route exact="true" path="/user/academic" element={<AcademicScreen />} />
          <Route exact="true" path="/user/calendar" element={<CalendarScreen />} />
          <Route exact="true" path="/user/profile" element={<ProfileScreen />} />
        </Routes>
    </div>
  );
} //<BrowserRouter> <Navigation />
/*
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
*/

/*const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
  );
};*/



