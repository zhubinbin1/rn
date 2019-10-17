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

const LIST_DATA = [{title:"Money management",icon:"./imgs/ride_ic_launcher.png"},{title:"Order management",icon:"./imgs/ride_ic_launcher.png"},{title:"Help center",icon:"./imgs/ride_ic_launcher.png"},{title:"setting",icon:"./imgs/ride_ic_launcher.png"}];
const BOTTOM_DATA = ["Riders \nRecruitment","Reward \nfor Sharing"];

 class LeftDrawer extends Component<{}> {
   lItem(){
     let table =[]
      for(let i=0;i<LIST_DATA.length;i++){
        let data = LIST_DATA[i];
        table.push(
          <View style={styles.item}>
          <Image
            source={require('./imgs/ride_ic_launcher.png')}
            style={{width: 20, height: 20}}
            resizeMode='cover'
            resizeMethod='scale'/>
            <Text style={{marginLeft: 10,fontSize: 15}}>{data.title}</Text>
          </View>
        )
      }
     return table
   }
   bItem(){
     let table =[]
      for(let i=0;i<BOTTOM_DATA.length;i++){
        let data = BOTTOM_DATA[i];
        table.push(
          <View style={styles.bottom}>
          <Image
            source={require('./imgs/ride_ic_launcher.png')}
            style={{width: 20, height: 20,alignSelf: 'center'}}
            resizeMode='cover'
            resizeMethod='scale'/>
            <Text style={{fontSize: 12,alignSelf: 'center'}}>{data}</Text>
          </View>
        )
      }
     return table
   }
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 20,marginBottom: 40}}>
          <Image
          source={require('./imgs/ride_ic_launcher.png')}
          style={{width: 80, height: 80}}
          resizeMode='cover'
          resizeMethod='scale'></Image>
          <Text style={{marginTop: 10,color:'#345',fontSize: 20}}>zhubinbin</Text>
          <Text style={{marginTop: 5,color:'#666',fontSize: 14}}>描述信息01111111111</Text>
        </View>
        {this.lItem()}
        <View style={{flexDirection: 'row',alignItems: 'flex-end',flex: 1,justifyContent:'space-around',}}>
        {this.bItem()}
        </View>
      </View>
);
  }
}
export default LeftDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    backgroundColor: '#999',
    marginRight: 100,
  },
  item:{
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  bottom:{
  },
  desc:{

  },
  bottom:{

  }
});
