import React, {useState, createRef} from 'react';
import axios from 'axios';
import logo from '../LogoEurecaPRO.PNG';
import Loader from "react-js-loader";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

//import AsyncStorage from '@react-native-community/async-storage';
//import setNavigationRoot from '../services/setNavigationRoot';

export default function LoginScreen3() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

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
        console.log('data to send: ' + dataToSend);
        console.log('formBody: ' + formBody);

        /*try {
            console.log("empieza axios");
                axios({
                method: "post",
                url: 'http://localhost:8090/user/login',
                data: formBody,
                config: { headers: { "Content-Type": "multipart/form-data",
                                "Access-Control-Allow-Origin": "*" } }
            })
            .then(response => {
                console.log("axios post")
                console.log(response);
            })
            .catch(function(error) {
                console.log("error axios post");
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }*/
    };

  return (
    <View className="mainBody">
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                src={logo}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View className="SectionStyle">
              <input
                type="text"
                className="inputStyle"
                value={userEmail}
                onChange={(e) =>
                  setUserEmail(e.target.value)
                }
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                /*onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }*/
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View className="SectionStyle">
              <input
                type="password"
                className="inputStyle"
                value={userPassword}
                onChange={(e) =>
                  setUserPassword(e.target.value)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                //ref={passwordInputRef}
                //onSubmitEditing={Keyboard.dismiss}
                //blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text className="errorTextStyle">
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              className="buttonStyle"
              activeOpacity={0.5}
              onPress={handleSubmit}>
              <Text className="buttonTextStyle">LOGIN</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

