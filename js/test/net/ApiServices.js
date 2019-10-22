import React, { Component } from 'react';
import GetNet,{HOST_NAME} from '../utils/getNet'
import JsonUtil from '../utils/JsonUtil'
export default class ApiServices{
  static login(phoneNum,passWard,callBack){
    let login_n = HOST_NAME+"/driver/login"
    let params = {"phone_number":phoneNum,"password":passWard}
    let jParams = JsonUtil.jsonToStr(params)
    GetNet.send('post',login_n,params,callBack)
  }
}
