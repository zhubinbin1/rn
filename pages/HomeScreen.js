import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
  <View style={styles.container}>
      <View style={styles.item}>
      <Button  title="个人页面"
         onPress ={
        () => navigate('Profile', {name: 'Jane'})
      }/>
    </View>
    <View style={styles.item}>
      <Button title="列表页面"
        onPress ={
        () => navigate('FlatListScreen', {name: "你好"})
      }/>
    </View>
    <View style={styles.item}>
      <Button title="sectionList页面"
        onPress ={
        () => navigate('SectionList', {name: "你好"})
      }/>
    </View>
</View>);
  }
}
const styles = StyleSheet.create({
  container:{
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    paddingLeft:1,
    paddingTop: 1,
    flexDirection: 'row',
    backgroundColor: '#ccc'
  },
  item:{
    alignItems: 'flex-start',
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: 'red',
  }
});
export default HomeScreen;
