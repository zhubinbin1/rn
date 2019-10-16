import{createAppContainer} from 'react-navigation';
// import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import FlatListScreen from './FlatListScreen'
import SectionList from './SectionList'

const MainNavigator =createStackNavigator({
  Home:{screen:HomeScreen},
  Profile:{screen:ProfileScreen},
  FlatListScreen:{screen:FlatListScreen},
  SectionList:{screen:SectionList},
});
const App =createAppContainer(MainNavigator);
export default App;
