import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export var StorageKey ={  USER_TOKEN : 'USER_TOKEN', USER_INFO :'USER_INFO'}
class DeviceStorage {
    /**
     * 获取
     * @param key
     * @returns {Promise<T>|*|Promise.<TResult>}
     eg:
     DeviceStorage.get("USER_INFO").then((infos)=>{
     })
     */

    static get(key) {
        return AsyncStorage.getItem(key).then((value) => {
            return value;
        });
    }


    /**
     * 保存
     * @param key
     * @param value
     * @returns {*}
     eg:  DeviceStorage.save("USER_INFO","userInfo")
     */
    static save(key, value) {
        return AsyncStorage.setItem(key, value);
    }


    /**
     * 更新
     * @param key
     * @param value
     * @returns {Promise<T>|Promise.<TResult>}
     */
    static update(key, value) {
        return DeviceStorage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, value);
        });
    }


    /**
     * 更新
     * @param key
     * @returns {*}
     */
    static delete(key) {
        return AsyncStorage.removeItem(key);
    }
}

export default DeviceStorage;
