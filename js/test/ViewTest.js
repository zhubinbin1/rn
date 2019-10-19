/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 {
  "title": "The Basics - Networking",
  "description": "Your app fetched this from a remote endpoint!",
  "movies": [
    { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
    { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
    { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
    { "id": "4", "title": "Inception", "releaseYear": "2010" },
    { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
  ]
}
 */

import React, { Component } from 'react';
import getNet from './utils/getNet'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  ProgressBarAndroid,
  DrawerLayoutAndroid,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Picker,
  Button,

} from 'react-native';

class ViewTest extends Component<{}> {
constructor(props){
  super(props);
  this.state = {
    movieData:null,
    modalVisible: false,
    language:"java",
  }
}
 componentDidUpdate(prevProps, prevState, snapshot){
  }
componentDidMount(){
 getNet.getMoviesFromApi((data)=>{
  this.setState({
      movieData:data
    });
  })

}
setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  getList(){
    let title="\n"
    if(this.state.movieData){
      title+="题目:"+this.state.movieData.title
      this.state.movieData.movies.map((item)=>{
        title = title+"\n"+item.title
      })
      title+= "\n"+"描述:"+this.state.movieData.description
    }

    return title
  }
getNav=()=>{
  return <View style={{flex: 1, backgroundColor: '#fff'}}>
    <TouchableOpacity
      style={{justifyContent: 'center',backgroundColor: '#ccc',marginBottom: 5}}
      onPress={()=>{
        this.drawerLayout.closeDrawer()
      }}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}> closeDrawer</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{justifyContent: 'center',backgroundColor: '#ccc'}}
      onPress={()=>{
      }}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}> 点击测试</Text>
  </TouchableOpacity>

  </View>
}
  render() {
    const {navigate} =this.props&&this.props.navigation;
    const navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}> the Drawer!</Text>
    </View>
  );
    const modalTest = (
      <View style={{ marginTop: 22 }}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
              }}
              onShow={() => {
              }}
            >
              <View style={{ marginTop: 22 }}>
                <View>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text>Hide Modal</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <Text>Show Modal</Text>
            </TouchableHighlight>
          </View>
    )
 const activityIndicator=(
   <>
    <ActivityIndicator
      size="large" color="#0f0"
      hidesWhenStopped={false}
      animating={true}></ActivityIndicator>
      <Button
        title="Learn More"
        color="#841584"
        disabled={false}
        accessibilityLabel="Learn more about this purple button"
      />
    </>
  )
  const imageTest = <Image
    opacity={0.9}
    overflow='hidden'
    fadeDuration={300}
    backfaceVisibility='hidden'
    resizeMode= 'contain'
    defaultSource={require('./imgs/ride_ic_launcher.png')}
    style={{width: 150, height: 150}}
    source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
  />
  const pickTest = (
      <Picker
      selectedValue={this.state.language}
      mode="dialog"
      prompt="请选择"
      style={{height: 50, width: 150}}
      onValueChange={(itemValue, itemIndex) =>
        this.setState({language: itemValue})
      }>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  )
  const progressBarTest=(
    <View style={styles.container}>
        <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="SmallInverse" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
  )
    return (
      <DrawerLayoutAndroid
          drawerWidth={300}
          drawerBackgroundColor="rgba(1,1,1,1)"
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          drawerLockMode='unlocked'
          onDrawerClose={()=>{}}
          ref={(instance)=>this.drawerLayout= instance}
          renderNavigationView={this.getNav}>
          <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={styles.welcome}>
                网络请求的数据:
                {this.getList()}
              </Text>

          </View>
      </DrawerLayoutAndroid>
    );
  }
}
export default ViewTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
