/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import JsonUtil from './utils/JsonUtil'
import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  ViewPagerAndroid,
  Image,
  Alert,
  Easing,
  Animated,
  TouchableOpacity,
  View
} from 'react-native';
import TitleBar from './MoneyManagerMentBar'
const HEAD_DATA = [{price:"N0.00",name:"Todays income"},
                  {price:"N0.00",name:"Total rides today"},
                  {price:"1.18",name:"Total hours online today"},
                  {price:"10%",name:"cooperation score"}]
const STR = "{\"err\":null,\"data_list\":[{\"title\":\"单单奖励1\",\"type\":1004,\"status\":1,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"},{\"title\":\"单单奖励2\",\"type\":1005,\"status\":1,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"},{\"title\":\"单单奖励3\",\"type\":1006,\"status\":2,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"}]}"
 class OrideHome extends Component<{}> {
   constructor(props){
     super(props);
     this.state ={
       showData:JsonUtil.strToJson(STR),
       fadeAnim : new Animated.Value(0),
     }
   }
   layout(data){
     return <View style={{flexDirection: 'column',alignItems: 'center',flex: 1}}>
       <Text style={{color:'white',fontSize: 15}}>
         {data.price}
       </Text>
       <Text style={{color:'white', fontSize: 15}}>
         {data.name}
       </Text>
     </View>
   }
  headView(){
    let navigation = this.props.navigation
  return <View style={{flexDirection: 'column',backgroundColor: '#222'}}>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,}}>
        {this.layout(HEAD_DATA[0])}
        <View style={{height: 25,width: 1,alignSelf: 'center',backgroundColor: 'white'}}></View>
        {this.layout(HEAD_DATA[1])}
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,}}>
        {this.layout(HEAD_DATA[2])}
        <View style={{height: 25,width: 1,alignSelf: 'center',backgroundColor: 'white'}}></View>
        {this.layout(HEAD_DATA[3])}
      </View>
  </View>
    // let arr = []
    // HEAD_DATA.map((data)=>{
    //   arr.push(
    //     this.layout(data)
    //   )
    // })
    // return arr
  }

  viewPager(){
    return (
    <ViewPagerAndroid
      style={styles.viewPager}
      initialPage={0}>
      <View style={styles.pageStyle} key="1">
        <Text style={{color:'white'}}>图片1</Text>
      </View>
      <View style={styles.pageStyle} key="2">
        <Text style={{color:'white'}}>图片2</Text>
      </View>
    </ViewPagerAndroid>
  );
  }
  onClosed=()=>{
    this.props.onClosed&&this.props.onClosed()
  }
componentDidMount(){
  this._startFadeAnim()
}
  onHelp=()=>{
    // 与原生交互
    this.props.navigation&&this.props.navigation.navigate("NativePage")
  }
  componentDidUpdate(prevProps, prevState, snapshot){

  }
  _startFadeAnim=()=>{
    this.state.fadeAnim.setValue(0);
    Animated.timing(                  // 随时间变化而执行动画
          this.state.fadeAnim,                       // 动画中的变量值
          {
            toValue: 1,                   // 透明度最终变为1，即完全不透明
            duration: 1500,
            easing: Easing.linear,            // 让动画持续一段时间
          }
        ).start(()=>this._startFadeAnim());
  }
  _renderItem(item){
    return(
      <View style={{marginLeft: 10,marginRight: 10}}>
        <View style={{backgroundColor:"transparent",height: 2}}></View>
        <TouchableOpacity style={{padding:10,borderColor: 'black',borderRadius: 5,elevation: 10,backgroundColor:'#eee'}}
          onPress={()=>{
            this.props.navigation&&this.props.navigation.navigate("WebViewFragment")
          }}>
        <View>
          <Text>{item.title}</Text>
            <Text style={{color: "#555",marginTop: 5}}>{item.start_time}-{item.end_time}</Text>
        </View>
          <View style={{position: 'absolute',right: 10,top: 10}}>
          {
            item.status===1?<Text style={{color:'#0f0'}}>in progress</Text>:<Text>finished</Text>
          }
          </View>
        </TouchableOpacity>
      </View>

    )

  }
  render() {
    return (
      <View style={styles.container}>

          <TitleBar title="orderHome"
            onHelp={this.onHelp}
            onClosed={this.onClosed}
            leftIcon = {require('./imgs/oride_menu.png')}
             />
        <View style={styles.header}>
          {this.headView()}
        </View>
        <View style={styles.middle}>
          {this.viewPager()}
        </View>
        <View>
          <FlatList
            data={this.state.showData.data_list}
            keyExtractor={(item: object, index: number) =>index+""}
            renderItem={({item}) => this._renderItem(item)}
            ></FlatList>
        </View>
        <TouchableOpacity style={styles.stop}
                 onPress={()=>{

                 }}>
                 <Text style={{fontSize: 20,color: '#fff',fontWeight: 'bold'}}>stop</Text>
        </TouchableOpacity>
        <Animated.View style={[styles.anim,{
          opacity:this.state.fadeAnim,
          transform: [
                {scale: this.state.fadeAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 2],
                  })},
                {rotateZ: this.state.fadeAnim.interpolate({
                          inputRange: [0,1],
                          outputRange: ['0deg', '360deg']
                      })
                  }]
          }
            ]}>
          <Text sytle={{alignSelf:'center',color:"#0f0"}}>动画</Text>
        </Animated.View>
        <TouchableOpacity style={styles.goto}
                 onPress={()=>{

                 }}>
                 <Text style={{fontSize: 20,color: '#fff',fontWeight: 'bold'}}>flag Down</Text>
        </TouchableOpacity>
      </View>
);
  }
}
export default OrideHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ccc',
  },

  header:{

  },
  middle:{
  },
  stop:{
    borderRadius: 30,
    backgroundColor: "#333",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  goto:{
    borderRadius: 30,
    backgroundColor: "#0f0",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  anim:{
    borderRadius: 20,
    backgroundColor: "#0f0",
    height: 40,
    width: 40,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
  },
  viewPager: {
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    elevation:25,
    backgroundColor: '#aaa',
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 0},
    borderRadius:10,
  }
});
