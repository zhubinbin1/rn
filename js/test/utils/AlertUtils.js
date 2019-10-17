
import React, { Component } from 'react';
class AlertUtils extends Component{
  static showAlert(){
    Alert.alert("", '您确定登陆?', [
      {text: '确定', onPress: ()=>{
        console.log("登陆")
        this.login()
      }},
      {text: '取消', onPress: ()=>{
        console.log("登陆")
      }},
    ])
  }
}
