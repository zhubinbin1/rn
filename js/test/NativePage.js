/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 与原生交互
 参考:
 https://juejin.im/post/5d05b5f6e51d45777b1a3d8d

 步骤:
 创建自定义 Module:extends ReactContextBaseJavaModule
创建自定义 Package 注册自定义 Module implements ReactPackage
注册自定义 Package   new CustomReactPackage()
在RN中使用自定义 Module   import { NativeModules } from "react-native";
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeModules,
  requireNativeComponent,
  Button
} from 'react-native';

 class NativePage extends Component<{}> {

  render() {
    NativeModules.CustomRNModule.callFunction("这里是参数 params 的内容",
        (parma1, parma2) => {
          var result = parma1 + parma2;
          console.log(result); // 显示： 这是从原生返回的字符串
        },
      errMsg => {
          console.log(errMsg);
      }
    );
    let MyButton = requireNativeComponent('NativeMyButton');
    const {navigate} =this.props&&this.props.navigation;
    let customModule = NativeModules.CustomRNModule;
    let constant = customModule.getConstants()
    return (
      <View style={styles.container}>
        <Text>
          欢迎来到与原生交互测试
        </Text>
        <Text>{customModule.TEXT}   {constant.TEXT}</Text>
      </View>
    );
  }
}
export default NativePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
