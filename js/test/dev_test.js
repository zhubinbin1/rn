/**
 * Sample React Native App
 * https://github.com/facebook/react-native

 模拟侧滑
 */

import React, { Component } from 'react';
import devlist from './devlist'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import{createAppContainer} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {DrawerItem} from 'react-navigation'
const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={{width:200,height:100,backgroundColor:'red'}}></View>
        </SafeAreaView>
    </ScrollView>
);
const Drawnav=createDrawerNavigator({
  devlist:{
    screen:devlist,
    // navigationOptions:{
    //   drawerLabel:"devlist",
    //   drawerIcon:({tintColor})=>{
    //   return  <MaterialIcons
    //       name ={"drafts"}
    //       size = {24}
    //     style={{color: tintColor}}/>
    //   }
    // }
  },
  devlist2:{
    screen:devlist
  }
},{
  order: ['devlist', 'devlist2'],//routeNames数组，用于定义抽屉项目的顺序。
  drawerLockMode: 'unlocked',//设置是否响应手势
  initialRouteName:"devlist",
  drawerPosition:'left',
  drawerWidth: 250, //抽屉的宽度或返回的功能。
  drawerPosition: 'left', //选项是left或right。默认是left位置。
  useNativeAnimations: false, //启用原生动画。默认是true。
  drawerBackgroundColor: 'pink', //使用抽屉背景获取某种颜色。默认是white。
  contentOptions:{
    activeTintColor:"#ccc",
  },
  contentComponent:CustomDrawerContentComponent,
  }
)

const App2 =createAppContainer(Drawnav);
export default App2;
class App extends Component<{}>{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>研发测试</Text>
      </View>
    )
  }
}

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
