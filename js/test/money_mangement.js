/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 {
    "err": null,
    "data_list": [
        {
            "title": "单单奖励1",
            "type": 1004,
            "status": 1,
            "start_time": 1570852446,
            "end_time": 1571457246,
            "skip_url": "http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24"
        },
        {
            "title": "单单奖励2",
            "type": 1005,
            "status": 1,
            "start_time": 1570852446,
            "end_time": 1571457246,
            "skip_url": "http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24"
        },
        {
            "title": "单单奖励3",
            "type": 1006,
            "status": 1,
            "start_time": 1570852446,
            "end_time": 1571457246,
            "skip_url": "http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24"
        }
    ]
}
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
  ActivityIndicator,
  TouchableOpacity,
  View
} from 'react-native';
import TitleBar from './MoneyManagerMentBar'
const HEAD_DATA = [{price:"₦0.00",name:"Estimated income for today"},
                  {price:"₦0.00",name:"Today's commission"},
                  {price:"₦11.18",name:"Cashless income"},
                  {price:"₦100",name:"Cash income"}]
const STR = "{\"err\":null,\"data_list\":[{\"title\":\"单单奖励1\",\"type\":1004,\"status\":1,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"},{\"title\":\"单单奖励2\",\"type\":1005,\"status\":1,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"},{\"title\":\"单单奖励3\",\"type\":1006,\"status\":2,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"},{\"title\":\"单单奖励5\",\"type\":1005,\"status\":1,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"},{\"title\":\"单单奖励6\",\"type\":1005,\"status\":1,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"},{\"title\":\"单单奖励7\",\"type\":1005,\"status\":2,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"},{\"title\":\"单单奖励8\",\"type\":1005,\"status\":1,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"},{\"title\":\"单单奖励9\",\"type\":1005,\"status\":1,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"},{\"title\":\"单单奖励10\",\"type\":1005,\"status\":1,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"},{\"title\":\"单单奖励11\",\"type\":1005,\"status\":1,\"start_time\":1570852446,\"end_time\":1571457246,\"skip_url\":\"http: //dev.api.o-pay.in/activity/#/onlineTime?act_id=24\"}]}"
 class moneyMangement extends Component<{}> {
   constructor(props){
     super(props);
     this.state ={
       showData:JsonUtil.strToJson(STR),
       refreshing:false
     }
   }
   layout(data){
     return <View style={{flexDirection: 'column',alignItems: 'flex-start',marginLeft: 20,flex: 1}}>
       <Text style={{color:'white', fontSize: 12}}>
         {data.name}
       </Text>
       <Text style={{color:'white',fontWeight: 'bold',fontSize: 15}}>
         {data.price}
       </Text>
     </View>
   }
   componentDidUpdate(prevProps, prevState, snapshot){

   }
  headView(){
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
  }

  onClosed=()=>{
    Alert.alert("关闭")
  }

  onHelp=()=>{
    // Alert.alert("帮助")
  }
  componentDidUpdate(prevProps, prevState, snapshot){

  }
  _renderItem(item,index, separators){
    return(
      <View style={{marginLeft: 10,marginRight: 10}}>
        <View style={{backgroundColor:"transparent",height: 2}}></View>
        <TouchableOpacity
          style={{padding:10,borderColor: 'black',borderRadius: 5,elevation: 10,backgroundColor:'#eee'}}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
          >
        <View>
          <Text>{item.title}</Text>
            <Text style={{color: "#555",marginTop: 5}}>{(item.start_time*1000)}-{item.end_time}</Text>
        </View>
        <View style={{position: 'absolute',right: 10,top: 10}}>
        {
          item.status===1?<Text style={{color:'#0f0'}}>in progress{index}</Text>:<Text>finished</Text>
        }
        </View>

        </TouchableOpacity>
      </View>

    )

  }
  render() {
    return (
      <View style={styles.container}>

          <TitleBar title="moneyMangement"
            onHelp={this.onHelp}
            onClosed={this.onClosed}
             />
        <View style={styles.header}>
          {this.headView()}
        </View>
        <View style={styles.bottom}>
          <FlatList
            data={this.state.showData.data_list}
            numColumns={1}
            horizontal = {false}
            ItemSeparatorComponent={ItemDivideComponent}
            keyExtractor={(item: object, index: number) =>index+""}
            renderItem={({item ,index, separators}) => this._renderItem(item,index, separators)}
            ListEmptyComponent={<Text style={{fontSize: 40, alignSelf: 'center'}}>空页面还没有数据哦！</Text>}
            ListFooterComponent={()=>this.getIndictor()}
            ListHeaderComponent={<Text style={{fontWeight: 'bold', fontSize: 20,alignSelf: 'center'
            }}>头部</Text>}
            refreshing={this.state.refreshing}
            onRefresh={()=>{
              this.setState({refreshing:true});
              setTimeout(()=>{/*这里模拟请求网络*/
                  this.setState({refreshing:false});
              },2000)
            }}
            onEndReachedThreshold={0.1}
            onEndReached={({distanceFromEnd}) => (
              setTimeout(() => {
                this.setState((state) => ({

                }));
              }, 3000)
            )}
            showsVerticalScrollIndicator={false}
            ></FlatList>
        </View>
      </View>
);
  }
  /**
  底部导航器
  */
  getIndictor(){
    return <View style={{alignItems: 'center'}}>
            <ActivityIndicator
            style={{color: 'red',}}
            size={'large'}
            animating={true}
            ></ActivityIndicator>
            <Text>正在加载更多...</Text>
        </View>
  }
}

/**
分割线
*/
class ItemDivideComponent extends Component {
  render() {
    return (
      <View style={{height: 1, backgroundColor: 'skyblue',marginLeft: 10,marginRight: 10}}/>
    );
  }
};
export default moneyMangement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ccc',
  },

  header:{

  },
  bottom:{
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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
