/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import JsonUtil from './JsonUtil'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  Button,
} from 'react-native';
 class getNet extends Component {
     static  async getMoviesFromApi() {
        try {
          let response = await fetch(
            'https://facebook.github.io/react-native/movies.json',
          );
          let responseJson = await response.json();
          console.log("responseJson===:"+responseJson.movies[0].title)
          return responseJson.movies;
        } catch (error) {
          console.error(error);
        }
      }
  static getMoviesFromApiAsync() {
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("responseJson===:"+responseJson.movies[0].title)
          return responseJson.movies;
        })
        .catch((error) => {
          console.error(error);
        });
    }


    static async login(callBack){
      try {
        let param = {
              "user_token":"{\"firstName\":\"天王\",\"lastName\":\"盖地虎\",\"phoneNumber\":\"022222223200\"}",
              "expire":"24h0ms"
              }
        let response = await fetch('http://dev.api.o-pay.in/user/login',
          {
            method:'POST',
            cache:'default',
            headers:({
              'user-agent': 'Mozilla/4.0 MDN Example',
              'content-type': 'application/json'
            }),
            body:JsonUtil.jsonToStr(param)
          });
          if (response.ok) {
            let responseJson = await response.json();
            callBack(responseJson)
          }else{
            throw new Error('Network response was not ok.');
          }

        // return responseJson;

      } catch (error) {
            console.log('错误问题: ', error.message);
            }
   }
   static send(method, url, data, callback) {
        let request;
        if (method === 'get') {
            request = new Request(url, {
                method: 'GET',
                headers: ({
                    'Content-Type': 'application/json'
                })
            });
        } else if (method === 'post') {
            request = new Request(url, {
                method: 'POST',
                headers: ({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(data)
            });
        }
        fetch(request).then((response) => response.json())
            .then((jsonData) => {
                callback(jsonData);
            });
    }

}
export default getNet;
