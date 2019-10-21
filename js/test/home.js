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
  Button,
  DrawerLayoutAndroid,
} from 'react-native';
import OrideHome from './OrideHome'
import LeftDrawer from './leftDrawer'

 class Home extends Component<{}> {
   leftDrawerView=()=>{
     return <LeftDrawer {...this.props}/>
   }

   layerss =()=> {
    return ( <View >
            <View style={styles.pButton}>
              <Button title="MoneyMangement"
                onPress={
                  ()=>navigate('moneyMangement',{name:"你好"})
                }
                />
            <View style={styles.pButton}>
              <Button title="login"
                  onPress={
                    ()=>navigate('login',{name:"你好"})
                  }
                  />
            </View>
            <View style={styles.pButton}>
              <Button title="devlist"
                  onPress={
                    ()=>navigate('devlist',{name:"你好"})
                  }
                  />
            </View>
            <View style={styles.pButton}>
              <Button title="leftDrawer"
                  onPress={
                    ()=>navigate('leftDrawer',{name:"你好"})
                  }
                  />
            </View>
            <View style={styles.pButton}>
              <Button title="OrideHome"
                  onPress={
                    ()=>navigate('OrideHome',{name:"你好"})
                  }
                  />
            </View>
            <View style={styles.pButton}>
              <Button title="ViewTest"
                  onPress={
                    ()=>navigate('ViewTest',{name:"你好"})
                  }
                  />
            </View>
        </View>
    </View>)
   }
   onClosed=()=>{
     this.drawerLayout&&this.drawerLayout.openDrawer()
   }
  render() {
    let {navigate} = this.props.navigation;
    return (
      <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          drawerLockMode='unlocked'
          onDrawerClose={()=>{}}
          ref={(instance)=>this.drawerLayout= instance}
          renderNavigationView={this.leftDrawerView}>
          <View style={{flex: 1, alignItems: 'center'}}>
              <OrideHome {...this.props} onClosed ={this.onClosed} />
          </View>
      </DrawerLayoutAndroid>
      );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  desc: {
    fontSize: 20,
    justifyContent: 'center',
    margin: 10,
  },
  pButton: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
