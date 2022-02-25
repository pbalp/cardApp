import React, { useState, useEffect } from 'react';

//import { ImageBackground, Text, View, ScrollView } from 'react-native';
//import { ScrollView, ScrollObserver  } from '@cantonjs/react-scroll-view';
import QRCode from "react-qr-code";
import './ProfileScreen.css';
import axios from 'axios';

//import imageStudent from '../../IDcardStudentTemplate.png';
//import imageStaff from '../../IDcardStaffTemplate.png';
//import imageBack from '../../IDcardBackTemplate.png';

const ProfileScreen = (props) => {
    /*const [images, setimages] = useState([
      require('./card2/assets/IDcardTemplate.png'),
      require('./card2/assets/IDcardBackTemplate.png')
    ]);*/
  
    const [name, setName] = useState('Name');
    const [status, setStatus] = useState('Status');
    const [role, setRole] = useState('Role');
    const [university, setUniversity] = useState('University');
    const [cardNumber, setCardNumber] = useState('Card Number');
    const [expirationDate, setExpirationDate] = useState('Expiration Date');

    const [style, setStyle] = useState('imageFrontStudent');
    const [nameStyle, setNameStyle] = useState('');
    const [statusStyle, setStatusStyle] = useState('  ');
    const [roleStyle, setRoleStyle] = useState('');
    const [universityStyle, setUniversityStyle] = useState('');
    const [cardNumberStyle, setCardNumberStyle] = useState('');
    const [expirationDateStyle, setExpirationDateStyle] = useState('');

    useEffect(() => {
    //const getUser = (event) => {
      //event.preventDefault();
      localStorage.setItem("navigation", true);
      try {
        const user = JSON.parse(localStorage.getItem('user'));

        console.log("axios get");
        axios.get("http://localhost:3001/api/user/profile")
        .then(response => {
          const user = response.data;
          setName(user.name + " " + user.surname);
          console.log("USER STATUS ", user.status);
          if (user.status!='' || user.status!=null || user.status.length==0) { 
            console.log("USER STATUS VACIO");
            setStatus(user.status); 
          }
          else { setStatus("dfvd"); }
          setRole(user.role);
          setUniversity(user.university);
          setCardNumber(user.cardNumber);
          setExpirationDate(user.expirationDate);
          if (user.role==="student" || user.role==="alum") {
            console.log("STYLE STUDENT ", style);
            setStyle("imageFrontStudent");
            setNameStyle("nameStudent");
            setStatusStyle("statusStudent");
            setRoleStyle("roleStudent");
            setUniversityStyle("universityStudent");
            setCardNumberStyle("cardNumberStudent");
            setExpirationDateStyle("expirationDateStudent");
          } else {
            // console.log("STYLE STAFF ", style);
            setStyle("imageFrontStaff");
            setNameStyle("nameStaff");
            setStatusStyle("statusStaff");
            setRoleStyle("roleStaff");
            setUniversityStyle("universityStaff");
            setCardNumberStyle("cardNumberStaff");
            setExpirationDateStyle("expirationDateStaff");
          }

          // console.log("USER LOGIN", user);

        })
        .catch(function(error) {
          console.log(error);
        });
      } catch (error) {
        console.log(error);
      }
    //};
    })
  
    return (
      /*<ScrollView>*/
      <section>
      <div className="container">
        <div /*src={imageStudent}*/ className={style}>
          <div className={universityStyle}>
              <p>{university}</p>
            </div>
            <div className={statusStyle}>
              <p>{status}</p>
            </div>
            <div className={nameStyle}>
              <p>{name}</p>
            </div>
            <div className={roleStyle}>
              <p>{role}</p>
            </div>
            <div className={cardNumberStyle}> 
              <p>{cardNumber}</p>
            </div>
            <div className={expirationDateStyle}>
              <p>{expirationDate}</p>
            </div>
            <div className="qr">
              <QRCode value="https://moodle.eurecapro.tuc.gr/" className="qr" level="L" size={50}/>
            </div>
        </div>
      </div>
      <div className="container">
        <div /*src={imageBack}*/ className="imageBack">
        </div>
      </div>
      </section>
      /*</ScrollView>*/
    );
} /*<QRCode value="https://www.eurecapro.eu/" size={50}/>*/

/*
<ImageBackground source={require('./android/app/src/main/res/drawable/IDcardTemplate.png')} className="imageFront">
</ImageBackground>
<ImageBackground source={require('./android/app/src/main/res/drawable/IDcardBackTemplate.png')} className="imageBack">
</ImageBackground>
*/

export default ProfileScreen;
