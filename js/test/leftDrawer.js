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
  Alert,
  TouchableOpacity,
  View
} from 'react-native';

const LIST_DATA = [{title:"Money management",icon:"./imgs/ride_ic_launcher.png"},{title:"Order management",icon:"./imgs/ride_ic_launcher.png"},{title:"Help center",icon:"./imgs/ride_ic_launcher.png"},{title:"setting",icon:"./imgs/ride_ic_launcher.png"}];
const BOTTOM_DATA = ["Riders \nRecruitment","Reward \nfor Sharing"];

 class LeftDrawer extends Component<{}> {

   middleItem(){

     return (
       <View>
       <TouchableOpacity style={styles.item}
         onPress={
           ()=>{
             this.navigation.navigate('moneyMangement', {name: 'Jane'})
           }
         }
         >
       <Image
         source={require("./imgs/ride_ic_money.png")}
         style={{width: 20, height: 20}}
         resizeMode='cover'
         resizeMethod='scale'/>
         <Text style={{marginLeft: 10,fontSize: 15}}>{LIST_DATA[0].title}</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.item}
         onPress={
           ()=>{
              this.navigation.navigate('moneyMangement', {name: 'orderManageMent'})
           }
         }
         >
           <Image
             source={require("./imgs/ride_ic_money.png")}
             style={{width: 20, height: 20}}
             resizeMode='cover'
             resizeMethod='scale'/>
           <Text style={{marginLeft: 10,fontSize: 15}}>{LIST_DATA[1].title}</Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.item}
         onPress={
           ()=>{

           }
         }
         >
         <Image
           source={require("./imgs/ride_ic_tel.png")}
           style={{width: 20, height: 20}}
           resizeMode='cover'
           resizeMethod='scale'/>
         <Text style={{marginLeft: 10,fontSize: 15}}>{LIST_DATA[2].title}</Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.item}
         onPress={
           ()=>{

           }
         }
         >
         <Image
           source={require("./imgs/ride_ic_set.png")}
           style={{width: 20, height: 20}}
           resizeMode='cover'
           resizeMethod='scale'/>
          <Text style={{marginLeft: 10,fontSize: 15}}>{LIST_DATA[3].title}</Text>
         </TouchableOpacity>
       </View>
     )
   }
   bottomItem(){
     let table =[]
      for(let i=0;i<BOTTOM_DATA.length;i++){
        let data = BOTTOM_DATA[i];
        table.push(
          <View key={i}>
          <Image
            source={require('./imgs/ride_ic_launcher.png')}
            style={{width: 20, height: 20}}
            resizeMode='cover'
            resizeMethod='scale'/>
            <Text style={{fontSize: 12}}>{data}</Text>
          </View>
        )
      }
     return table
   }
  render() {
    this.navigation = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={{marginTop: 20,marginBottom: 40}}>
          <Image
          source={require('./imgs/ride_ic_default_avatar.png')}
          style={{width: 80, height: 80}}
          resizeMode='cover'
          resizeMethod='scale'></Image>
          <Text style={{marginTop: 10,color:'#345',fontSize: 20}}>zhubinbin</Text>
          <Text style={{marginTop: 5,color:'#666',fontSize: 14}}>描述信息01111111111</Text>
        </View>
        {this.middleItem()}
        <View style={{flexDirection:'row',flex: 1,alignItems: 'flex-end',justifyContent: 'space-between',position: 'relative',marginBottom: 10}}>
          {this.bottomItem()}
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
