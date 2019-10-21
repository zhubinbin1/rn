/**
 * Sample React Native App
 * https://github.com/facebook/react-native

 WebView的api:
 https://github.com/react-native-community/react-native-webview/blob/master/docs/Reference.md
 */

import React, { Component } from 'react';
import WebView from 'react-native-webview'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

 class Devlist extends Component<{}> {

  render() {
    const {navigate} =this.props&&this.props.navigation;
    return (
      <View style={styles.container}>

        <View
          style={{flex: 1}}
          >
        <WebView
          source={{uri: 'https://www.baidu.com'}}
          onError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
          onLoad={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            this.url = nativeEvent.url;
          }}
          ></WebView>
        </View>
      </View>
);
  }
}
export default Devlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
