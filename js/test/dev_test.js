/**
 * Sample React Native App
 * https://github.com/facebook/react-native

 模拟侧滑
 */

import React, { Component } from 'react';
import devlist from './devlist'
import moneyMangement from'./money_mangement'
import login from './login'
import home from './home'
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
        title: (navigation.state.params.name)+"moneyMangement",
      }),
  },
  devlist:{
    screen:devlist,
    navigationOptions: ({ navigation }) => ({
        title: "devlist",
      }),
  },
  login:{
    screen:login,
    navigationOptions: ({ navigation }) => ({
        title: "login",
      }),
  },
  home:{
    screen:home,
    navigationOptions: ({ navigation }) => ({
        title: "home",
      }),
  }


},
{
  initialRouteName:'login',
}
)

const App2 =createAppContainer(Drawnav);

class App extends Component<{}>{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>研发测试</Text>
      </View>
    )
  }
}
export default App2;
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