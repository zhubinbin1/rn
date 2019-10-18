/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

 class Home extends Component<{}> {

  render() {
    let {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          <Text style={styles.desc}>
            首页测试(每个按钮进入不同UI界面)
          </Text>
              <View style={styles.pButton}>
                <Button title="MoneyMangement"
                  onPress={
                    ()=>navigate('moneyMangement',{name:"你好"})
                  }
                  />
              <View style={styles.pButton}>
                <Button title="login"
                    onPress={
                      ()=>navigate('login',{name:"你好"})
                    }
                    />
              </View>
              <View style={styles.pButton}>
                <Button title="devlist"
                    onPress={
                      ()=>navigate('devlist',{name:"你好"})
                    }
                    />
              </View>
              <View style={styles.pButton}>
                <Button title="leftDrawer"
                    onPress={
                      ()=>navigate('leftDrawer',{name:"你好"})
                    }
                    />
              </View>
          </View>
      </View>
);
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  desc: {
    fontSize: 20,
    justifyContent: 'center',
    margin: 10,
  },
  pButton: {
    flexDirection: 'row',
    marginLeft: 5,
  },
});
