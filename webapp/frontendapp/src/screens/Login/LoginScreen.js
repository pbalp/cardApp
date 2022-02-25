import React, { useState, text } from 'react';
import logo from '../../EurecaProLogo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; //react-router-dom'
//import { useNavigate } from 'react-router';
import './LoginScreen.css';
//import PropTypes from 'prop-types';
//import Navigation from '../Navigation';
//import ldap from 'ldapjs';
//import ActiveDirectory from 'activedirectory';
//import { assert } from 'assert';
//import authentication from '../AuthenticationLdap';


export default function LoginScreen({ navigation }) {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  let navigate = useNavigate();
  //const navigate = useNavigate();
  //const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();


    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email ' + userEmail);
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);

    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    console.log('data to send: ' + dataToSend["email"] + " " + dataToSend["password"]);
    console.log('formBody: ' + formBody);

    try {
        console.log("empieza axios");
        console.log(" PathName ", window.location.pathname);
        /*axios.post(
          'http://localhost:8090/user/login',
          formBody,
          {
            headers: { 
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                      }
          }
        )*/
        axios({
            method: "post",
            url: 'http://localhost:3001/api/user/login',
            //action: '/login',
            data: dataToSend,
            config: { headers: { "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*" } } //"Content-Type": "application/json"
        })
        .then(response => {
          console.log("DATA ", response.data);
          if (response.data=='') { setErrortext('Please check your email or password'); }
          else {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          localStorage.setItem("user", JSON.stringify(response.data));

          //navigate("http://localhost:3000/user/home");
          const token = {
            userEmail,
            userPassword
          };
          //setToken(token);
          console.log("axios post");
          //console.log(formBody);
          //console.log(response);
          //console.log("DATA");
          //console.log(response.data);
          //navigation=true;
          console.log("Navigation antes ", localStorage.getItem("navigation"));
          localStorage.setItem("navigation", true);
          console.log("Navigation despues ", localStorage.getItem("navigation"));
          navigate("/user/profile"); //, { replace: true }
        }})
        .catch(function(error) {
          console.log("error axios post");
          console.log(error);
        });
    } catch (error) {
      setErrortext('Please check your email or password');
      console.error(error);
    }

    /*fetch('http://localhost:8090/user/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          //AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          //navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });*/
  };

  return( //<Navigation display='none' />
    <div className="App">
      
      <div className="loginform">
      <img src={logo} className="App-logo" alt="logo" />
        <form>
          <label>
            <input type="text" placeholder="Email" className="fluid-input" value={userEmail} onChange={ (e) => setUserEmail(e.target.value)}/>
            <p>{userEmail}</p>
          </label>
          <label>
            <input type="password" placeholder="Password" className="fluid-input" value={userPassword} onChange={ (e) => {setUserPassword(e.target.value)}}/>
          </label>
          <div>
            <button type="submit" className="btn-primary" id="loginbtn" onClick={handleSubmit}>Log in</button>
          </div>
          <div>
            <p className="errorTextStyle">{errortext}</p>
          </div>
      </form>
      </div>
      
    </div>
  )
  //<button type="submit">Submit</button> <p>Email</p> <p>Password</p>
}


/*Login.propTypes = {
  setToken: PropTypes.func.isRequired
};*/