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
  Switch,
  Image,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native';

 class SettingPage extends Component<{}> {
constructor(props){
  super(props);
  this.state = {
    AutomaticallySwitch :true,
    AssistantSwitch:false,
    HighSwitch:true,
    AvoidSwitch:false,
  }
}
  render() {
    const {navigate} =this.props&&this.props.navigation;
    return (
      <ScrollView style={[styles.container]}
        alwaysBounceVertical={true}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.leftText}>
            Version
          </Text>
          <Text style={styles.rightText}>
            4.11
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.leftText}>
          Version Upgrade
        </Text>
    </TouchableOpacity>
    <View style={styles.item}>
      <Text style={styles.leftText}>
        Automatically pick orders
      </Text>
      <Switch style={styles.rightText}
        disabled= {false}
        trackColor="#0f0"
        thumbColor={this.state.AutomaticallySwitch?"#0f0":"#ccc"}
        onValueChange={(newValue)=>{
          this.setState({AutomaticallySwitch:newValue});
        }}
        value = {this.state.AutomaticallySwitch}
        >
      </Switch>
    </View>
    <View style={styles.item}>
      <Text style={styles.leftText}>
        Assistant auto accept
      </Text>
      <Switch style={styles.rightText}
        disabled= {false}
        trackColor="#0f0"
        thumbColor={this.state.AssistantSwitch?"#0f0":"#ccc"}
        onValueChange={(newValue)=>{
          this.setState({AssistantSwitch:newValue});
        }}
        value = {this.state.AssistantSwitch}
        >
      </Switch>
    </View>
    <View style={styles.item}>
      <Text style={styles.leftText}>
        High accuracy positioning
      </Text>
      <Switch style={styles.rightText}
        disabled= {false}
        trackColor="#0f0"
        thumbColor={this.state.HighSwitch?"#0f0":"#ccc"}
        onValueChange={(newValue)=>{
          this.setState({HighSwitch:newValue});
        }}
        value = {this.state.HighSwitch}
        >
      </Switch>
    </View>
    <TouchableOpacity style={styles.item}>
      <Text style={styles.leftText}>
        Language
      </Text>
      <View style={[styles.rightText,{flexDirection: 'row'},]}>
      <Text  style={{marginRight: 5}}>
        English
      </Text>
      <Image
        style={{height: 20,width: 20,alignSelf: 'center'}}
        source={require('./imgs/icon_arrow_right.png')}>
      </Image>
      </View>
    </TouchableOpacity>
    <View style={styles.item}>
      <Text style={styles.leftText}>
        Avoid high way
      </Text>
      <Switch style={styles.rightText}
        disabled= {false}
        trackColor="#0f0"
        thumbColor={this.state.AvoidSwitch?"#0f0":"#ccc"}
        onValueChange={(newValue)=>{
          this.setState({AvoidSwitch:newValue});
        }}
        value = {this.state.AvoidSwitch}
        >
      </Switch>
    </View>
    <TouchableOpacity style={styles.item}>
      <Text style={styles.leftText}>
        Feedback
      </Text>
  </TouchableOpacity>
  </ScrollView>
);
  }
}
export default SettingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  item:{
    backgroundColor: "white",
    padding: 20,
    marginBottom: 3,
    flexDirection: 'row',
  },
  leftText:{
    fontSize: 15,
    alignSelf: 'center',
  },
  rightText:{
    fontSize: 15,
    position: 'absolute',
    right: 15,
    alignSelf: 'center',
  },

});
