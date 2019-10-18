/**
 * Sample React Native App
 * https://github.com/facebook/react-native

 模拟侧滑
 */

import React, { Component } from 'react';
import devlist from './devlist'
import moneyMangement from'./money_mangement'
import OrideHome from './OrideHome'
import login from './login'
import home from './home'
import leftDrawer from './leftDrawer'
import{createAppContainer} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
// import {createDrawerNavigator} from 'react-navigation-drawer'
// import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
const Drawnav=createStackNavigator({
  moneyMangement:{
    screen:moneyMangement,
    navigationOptions: ({ navigation }) => ({
      title:"moneyMangement",
      header:null,
        // title: (navigation.state.params.name)+"moneyMangement-动态",
      }),
  },
  devlist:{
    screen:devlist,
    navigationOptions: ({ navigation }) => ({
        title: "devlist页面",
      }),
  },
  login:{
    screen:login,
    navigationOptions: ({ navigation }) => ({
        title: "login页面",
      }),
  },
  home:{
    screen:home,
    navigationOptions: ({ navigation }) => ({
        title: "home页面",
      }),
  },
  leftDrawer:{
    screen:leftDrawer,
    navigationOptions: ({ navigation }) => ({
        title: "leftDrawer页面",
      }),
  },
  OrideHome:{
    screen:OrideHome,
    navigationOptions: ({ navigation }) => ({
        title: "OrideHome页面",
        header:null,
      }),
  }


},
{
  initialRouteName:'moneyMangement',
}
)

const App =createAppContainer(Drawnav);

export default App;
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'red',
    padding: 10,
  }
})
