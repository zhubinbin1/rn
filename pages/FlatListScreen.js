import React, {Component} from 'react'
import {Button, FlatList,StyleSheet,View,Text,RefreshControl,ActivityIndicator} from 'react-native'


type Props={}
const DATAS = ["北京","上海","广州","深圳","尼罗河","印度","菲律宾","香港","澳门","福建","加拿大"];
class FlatListScreen extends React.Component {
  static navigationOptions = {
    title: 'FlatListScreen 页面'
  };
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      dataArr:DATAS
    }
  }
  _renderItem(data){
    return <View style={styles.item}>
            <Text style = {styles.text}>{data.item}</Text>
          </View>
  }
  loadData(refresh){
    if(refresh){//如果是刷新
      this.setState({
        isLoading:true
      });
    }

    setTimeout(()=>{
      let dataArray=[];
      if(refresh){
        for(let i= this.state.dataArr.length-1;i>=0;i--){
          dataArray.push(this.state.dataArr[i]);
        }
      }else{
        dataArray = this.state.dataArr.concat(DATAS)
      }

      this.setState({
        dataArr : dataArray,
        isLoading : false,
      });
    },1000)
  }
  getIndictor(){
    return <View style={styles.pIndicator}>
<ActivityIndicator
style={styles.indicator}
size={'large'}
animating={true}
  ></ActivityIndicator>
<Text>正在加载更多...</Text>
    </View>
  }
  render() {
    return <View style={styles.container}>
      <FlatList
        data = {this.state.dataArr}
        renderItem={(data)=>this._renderItem(data)}
        // onRefresh={()=>{
        //   this.loadData()
        // }}
        // refreshing={this.state.RefreshControlRefreshControlisLoading}
        ListFooterComponent={()=>{
          return this.getIndictor()
        }}
        refreshControl={
          <RefreshControl
            title={"loading"}
            colors={['red','green','blue']}
            onRefresh={()=>{
              this.loadData(true)
            }}
            refreshing={this.state.isLoading}/>
        }
        onEndReached={()=>{this.loadData()}}
        />
    </View>
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  item:{
    flexDirection: 'row',
    padding: 5,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#169',
    flex: 1,
  },
  indicator:{
    color: 'red',
  },
  pIndicator:{
    alignItems: 'center'
  },
  text:{
    color: 'black',
    fontSize: 20,
  }
})
export default FlatListScreen;
