/**
 * Sample React Native App
 * https://github.com/facebook/react-native

 模拟侧滑
 */

import React, { Component } from 'react';
import devlist from './devlist';
import money_mangement from'./money_mangement';
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
  devlist:{
    screen:devlist,
  },
  money_mangement:{
    screen:money_mangement,
    // navigationOptions:{
    //   title:"devlist2"
    // }
  },

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
