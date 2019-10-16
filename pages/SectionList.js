import React, {Component} from 'react'
import {Button, FlatList,StyleSheet,SectionList,View,Text,RefreshControl,ActivityIndicator} from 'react-native'


type Props={}
const DATAS = [{data:["北京","上海","广州","深圳"],title:"一线"},{data:["尼罗河","印度","菲律宾","加拿大"],title:"国外"},{data:["香港","澳门","福建"],title:"二线"}];
class FlatListScreen extends React.Component {
  static navigationOptions = {
    title: 'SectionList 页面'
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
                />
              <Text>正在加载更多...</Text>
            </View>
  }
renderSectionHeader({section}){
    return <View style={styles.renderSection}>
          <Text>
      {section.title}
          </Text>
    </View>
  }
  render() {
    return <View style={styles.container}>
      <SectionList
        sections = {this.state.dataArr}
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
        onEndReached={()=>{this.loadData(false)}}
        renderSectionHeader={(data,sectionID)=>{return this.renderSectionHeader(data)}}
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
  },
  renderSection:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'yellow'
  }
})
export default FlatListScreen;
