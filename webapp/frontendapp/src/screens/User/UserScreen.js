import React from 'react';
//import { ImageBackground, Text, View, ScrollView } from 'react-native'; , { useState }
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import './UserScreen.css';
import HomeScreen from '../Home/HomeScreen';
import AcademicScreen from '../Academic/AcademicScreen';
import CalendarScreen from '../Calendar/CalendarScreen';
import ProfileScreen from '../Profile/ProfileScreen';
//import Navigation from '../Navigation';

import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

//import QRCode from 'react-native-qrcode-svg';
//import { WebView } from 'react-native-webview';
//import {Agenda} from 'react-native-calendars';
//import axios from 'axios';

function UserScreen() {

    /*const Tab = createBottomTabNavigator();

    return (
        <div className="body">
            
                <Navigation />
                <Routes>
                    <Route path="/user/home" element={<HomeScreen />} />
                    <Route path="/user/academic" element={<AcademicScreen />} />
                    <Route path="/user/calendar" element={<CalendarScreen />} />
                    <Route path="/user/profile" element={<ProfileScreen />} />
                </Routes>
            
        </div>
    );*/
} // <BrowserRouter> </BrowserRouter>

/*
<NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Calendar" component={CalendarScreen} />
                <Tab.Screen name="Academic" component={AcademicScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
*/

//const Tab = createBottomTabNavigator();

/*function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Academic" component={AcademicScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
}*/

export default UserScreen;