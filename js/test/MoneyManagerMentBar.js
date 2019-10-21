import React,{Component} from 'react'
import {View,Text,StyleSheet,Platform,Image,Alert,Dimensions,TouchableOpacity} from 'react-native'

const width = Dimensions.get('window').width;
export default class MoneyManagerMentBar extends Component{
  render(){
    return(<View style={styles.container}>
      <TouchableOpacity
        onPress={this.props.onClosed}>
          <Image style={{width: 20,height: 20}}
          resizeMode='contain'
          source={require('./imgs/oride_back.png')}/>
      </TouchableOpacity>
          <Text>{this.props.title}</Text>
      <TouchableOpacity
          onPress={this.props.onHelp}>
              <Image style={{width: 30,height: 30}}
              resizeMode='contain'
              source={require('./imgs/ride_ic_tel.png')}/>
      </TouchableOpacity>
        </View>);
  }

}
const styles = StyleSheet.create({
  container:{
    height: 50,
    flexDirection: 'row',
    width: width,
    justifyContent:'space-between',
    backgroundColor: '#eee',
    alignItems: 'center',
    paddingLeft : 10,
    paddingRight : 10,
  }
})
