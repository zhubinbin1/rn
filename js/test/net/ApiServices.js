import React, { Component } from 'react';
import GetNet,{HOST_NAME} from '../utils/getNet'
import JsonUtil from '../utils/JsonUtil'
import AsyncStorage ,{StorageKey}from '../utils/AsyncStorageUtil'
export default class ApiServices{
  static login(phoneNum,passWard,callBack){
    let login_n = HOST_NAME+"/driver/login"
    let params = {"phone_number":phoneNum,"password":passWard}
    let jParams = JsonUtil.jsonToStr(params)
    GetNet.send('post',login_n,params,callBack)
  }
  static statsToday(callBack){
    let statsToday_n = HOST_NAME+"/driver/stats/today"
    AsyncStorage.get(StorageKey.USER_TOKEN).then((infos)=>{
      let params= {"token":infos}
      GetNet.send('post',statsToday_n,params,callBack)
    })

  }
}
