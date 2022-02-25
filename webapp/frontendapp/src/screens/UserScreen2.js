import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, ViewBase, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

//import QRCode from 'react-native-qrcode-svg';
//import { WebView } from 'react-native-webview';
//import {Agenda} from 'react-native-calendars';
import axios from 'axios';

export default function UserScreen2() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      //
      //
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Academic" component={AcademicScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
}

function HomeScreen() {
    return (
      <View style={styles.screens}>
        
      </View>
    );


} //<WebView source={{ uri: 'https://www.eurecapro.eu/' }}/>

/*<Agenda />*/
function CalendarScreen() {
    return (
      <View style={styles.screens}>
        <ScheduleComponent>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
        <Text>Calendar!</Text>
      </View>
    );
}
  
function AcademicScreen() {
  return (
    <View style={styles.screens}>
      
    </View>
  );
} //<WebView source={{ uri: 'https://eurecapro-transplat.unileon.es/my/' }}/>

function ProfileScreen() {
    const [images, setimages] = useState([
      //require('./card2/assets/IDcardTemplate.png'),
      //require('./card2/assets/IDcardBackTemplate.png')
    ]);
  
    const [name, setName] = useState('Name');
    const [status, setStatus] = useState('Status');
    const [role, setRole] = useState('Role');
    const [university, setUniversity] = useState('University');
    const [cardNumber, setCardNumber] = useState('Card Number');
    const [expirationDate, setExpirationDate] = useState('Expiration Date');
  
    const getUser = async () => {
      try {
        axios.get("http://localhost:8090/user/profile")
        .then(response => {
          const user = response.data;
          setName(user.name);
          setStatus(user.status);
          setRole(user.role);
          setUniversity(user.university);
          setCardNumber(user.cardNumber);
          setExpirationDate(user.expirationDate);
        })
        .catch(function(error) {
          console.log(error);
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <ScrollView>
      <View style={styles.container}>
        <ImageBackground /*source={require('./android/app/src/main/res/drawable/IDcardTemplate.png')}*/ style={styles.imageFront}>
          <View style={styles.university}>
              <Text>{university}</Text>
            </View>
            <View style={styles.status}>
              <Text style={styles.statusStyle}>{status}</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.nameStyle}>{name}</Text>
            </View>
            <View style={styles.role}>
              <Text style={styles.roleStyle}>{role}</Text>
            </View>
            <View style={styles.cardNumber}> 
              <Text>{cardNumber}</Text>
            </View>
            <View style={styles.expirationDate}>
              <Text>{expirationDate}</Text>
            </View>
            <View style={styles.qr}>
              
            </View>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <ImageBackground /*source={require('./android/app/src/main/res/drawable/IDcardBackTemplate.png')}*/ style={styles.imageBack}>
        </ImageBackground>
      </View>
      </ScrollView>
    );
} /*<QRCode value="https://www.eurecapro.eu/" size={50}/>*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    roleStyle: {
      color: '#FFFFFF'
    },
    statusStyle: {
      fontWeight: '600',
      fontSize: 10,
      color: '#FFFFFF'
    },
    nameStyle: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#FFFFFF'
    },
    imageFront: {
      flex: 1,
      height: 450,
      width: 300,
      margin: 8,
    },
    imageBack: {
      flex: 1,
      height: 450,
      width: 300,
      margin: 8
    },
    screens: {
      flex: 1, 
    },
    university: {
      top: 146,
      left: 28,
    },
    status: {
      top: 170,
      left: 215,
    },
    name: {
      top: 180,
      left: 150,
    },
    role: {
      top: 187,
      left: 180,
    },
    cardNumber: {
      top: 303,
      left: 115,
    },
    expirationDate: {
      top: 284,
      left: 205,
    },
    qr: {
      flex: 1,
      height: 20,
      width: 20,
      top: 250,
      left: 23
    },
    profile: {
      flex: 1,
      height: 148,
      width: 184,
      top: 0,
      left: 0
    }
});