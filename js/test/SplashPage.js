/**
 * Sample React Native App
 * https://github.com/facebook/react-native
参考:
 https://snack.expo.io/@react-navigation/auth-flow-v3
 */

import React, { Component } from 'react';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import DeviceStorage ,{StorageKey}from './utils/AsyncStorageUtil'
import Login from './login'
import Home from './home'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  Button
} from 'react-native';

 class SplashPage extends Component<{}> {
constructor(props){
  super(props);
  this.state = {
    info:"",
  }
  this._getUserToken()
}
static navigationOptions = {
   title: 'Welcome',
   header:null,
 };
_getUserToken=async()=>{
    const userToken =await DeviceStorage.get(StorageKey.USER_TOKEN)
    // setTimeout(()=>{/*这里模拟请求网络*/
        this.props.navigation.navigate(userToken ? 'Home' : 'Login');
    // },1000)
  // DeviceStorage.get("USER_INFO").then((infos)=>{
  //      this.props.navigation.navigate(infos ? 'Home' : 'Login');
  // })
}
  render() {
    const {navigate} =this.props&&this.props.navigation;
    return (
      <View style={styles.container}>
        <Text >
          Welcome to SplashPage!
          {this.state.info}
        </Text>
        <ActivityIndicator
          size="large"  />
        <Button title = "save"
          onPress={
          ()=>{
            DeviceStorage.save(StorageKey.USER_TOKEN,"userInfo")
          }
          }>
        </Button>
        <Button title = "get"
          onPress={
            ()=>{
            DeviceStorage.get(StorageKey.USER_TOKEN).then((infos)=>{
                this.setState({info:infos});
            })

            }
          }>
        </Button>
        <Button title = "remove"
          onPress={
            ()=>{
            DeviceStorage.delete(StorageKey.USER_TOKEN).then((infos)=>{
                this.setState({info:infos});
            })

            }
          }>
        </Button>

      </View>
);
  }
}
const AppStack = createStackNavigator({ Home: Home});
const AuthStack = createStackNavigator({ Login: Login });
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: SplashPage,
    Home: AppStack,
    Login: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
