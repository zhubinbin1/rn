/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './code_push';//官网更新demo
//是否是用index.js需要更新android/app/build.gradle下的ntryFile: "index.android.js",
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
