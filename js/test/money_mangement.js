/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  Image,
  View
} from 'react-native';

 class moneyMangement extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image></Image>
        </View>
        <View style={styles.item}>
          <FlatList></FlatList>
        </View>
        <View style={styles.bottom}>

        </View>
      </View>
);
  }
}
export default moneyMangement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  desc:{

  },
  header:{

  },
  bottom:{

  }
});
