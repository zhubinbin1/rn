/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';

import getNet from './utils/getNet'
import ApiServices from './net/ApiServices'
import JsonUtil from './utils/JsonUtil'
import AsyncStorage,{StorageKey} from './utils/AsyncStorageUtil'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Button,
} from 'react-native';
//'http://ip.taobao.com/service/getIpInfo.php?ip=59.108.51.32'
// let url = 'http://dev.api.o-pay.in/user/login';
 class Login extends Component<{}> {
   static defaultNavigationOptions = {
    title: '登陆',
    header:null,
   };
   constructor(props){
     super(props);
     this.state={
       pwValue:"",
       numValue:"",
     }
   }
   _login=()=>{
     if(!this.state.pwValue||!this.state.numValue){
       ToastAndroid.show("请输入账号和密码 !", ToastAndroid.SHORT);
       return
     }
     ApiServices.login(this.state.numValue,this.state.pwValue,(data)=>{
       if(data.err){
         ToastAndroid.show(data.err.message, ToastAndroid.SHORT);
         return
       }
        AsyncStorage.save(StorageKey.USER_TOKEN,data.token)
        AsyncStorage.save(StorageKey.USER_INFO,JsonUtil.jsonToStr(data))
        console.log("responseJson:==="+(data));
        if(data.token){
           this.props.navigation.navigate("Home")
         }
     })
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
            <TextInput style={styles.textInput}
              value={this.state.numValue}
              onChangeText={text => this.setState({numValue:text})}
              ></TextInput>
        </View>
        <View style={styles.view2}>
            <Text style={styles.pointText}>Enter your PIN</Text>
            <TextInput style={styles.textInput}
              keyboardType="number-pad"
              multiline={false}
              placeholder="please input password"
              password={true}
              onChangeText={text => this.setState({pwValue:text})}
              value={this.state.pwValue}
              ></TextInput>
        </View>
        <View style={[styles.view2,{marginLeft: 50,marginRight: 50}]}>
            <Button title="Sign in"
            onPress={this._login}/>
        </View>
        <TouchableOpacity style={styles.view3}>
            <Text style={styles.forgotText}>Forgot your PIN?</Text>
        </TouchableOpacity>
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
    fontSize: 14,
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
