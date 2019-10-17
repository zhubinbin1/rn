/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import JsonUtil from './utils/JsonUtil'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  Button,
} from 'react-native';
//'http://ip.taobao.com/service/getIpInfo.php?ip=59.108.51.32'
// let url = 'http://dev.api.o-pay.in/user/login';
 class Login extends Component<{}> {
  async getMoviesFromApi() {
      try {
        let response = await fetch(
          'https://facebook.github.io/react-native/movies.json',
        );
        let responseJson = await response.json();
        console.log("responseJson===:"+responseJson.movies[0].title)
        return responseJson.movies;
      } catch (error) {
        console.error(error);
      }
}
 getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson===:"+responseJson.movies[0].title)
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }


  async login(){
    try {
      let param = {
            "user_token":"{\"firstName\":\"天王\",\"lastName\":\"盖地虎\",\"phoneNumber\":\"022222223200\"}",
            "expire":"24h0ms"
            }
      let response = await fetch('http://dev.api.o-pay.in/user/login',
        {
          method:'POST',
          cache:'default',
          headers:({
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
          }),
          body:JsonUtil.jsonToStr(param)
        });
      let responseJson = await response.json();
      console.log("responseJson:==="+(responseJson));
      return responseJson;
    } catch (error) {
          console.log('错误问题: ', error.message);
          }
 }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}>
          <Image source={require('./imgs/ride_ic_launcher.png')}
          style={{width: 80, height: 80}}
          resizeMode='cover'
          resizeMethod='scale'
          ></Image>
          <Text style={{fontSize: 22,color: '#999'}}>Welcome to Oride</Text>
        </View>
        <View style={styles.view2}>
            <Text style={styles.pointText}>Phone Number</Text>
            <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={styles.view2}>
            <Text style={styles.pointText}>Enter your PIN</Text>
            <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={[styles.view2,{marginLeft: 50,marginRight: 50}]}>
            <Button title="Sign in"
            onPress={()=>{
                this.login()
            }}/>
        </View>
        <View style={styles.view3}>
            <Text style={styles.forgotText}>Forgot your PIN?</Text>
        </View>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 2,
    marginTop: 5,
  },
  pointText:{
    borderColor: 'black',
    fontSize: 20,
    padding: 2,
  },
  view1:{
    marginTop: 20,
    alignItems: 'center',
  },
  view2:{
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  forgotText:{
    borderColor: 'black',
    fontSize: 10,
    padding: 2,
  },
  view3:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
});
