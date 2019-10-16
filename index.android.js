/**
 * @format
 */

import {AppRegistry} from 'react-native';
import code_push_hand from './js/test/code_push_hand.js';
import {name as appName} from './app.json';
import devlist from './js/test/devlist.js';
import devTest from './js/test/dev_test.js';//develop测试页面
import navigation from './pages/NavigatorPage'//导航

AppRegistry.registerComponent("dev_test", () => devTest);
AppRegistry.registerComponent("devlist", () => devlist);
AppRegistry.registerComponent("navigation", () => navigation);
