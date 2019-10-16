import React, {Component} from 'react'
import {Button} from 'react-native'

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'ProfileScreen 页面'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (<Button title="去 HomeScreen"
    onPress = {
      () => navigate('Home', {
          name: 'Jane'
        })
      }/>);
  }
}
export default ProfileScreen;
