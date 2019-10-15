/**
 * @format
 */

import {AppRegistry} from 'react-native';
import code_push_hand from './code_push_hand.js';
import {name as appName} from './app.json';
import devlist from './devlist.js';
import devTest from './dev_test.js';

AppRegistry.registerComponent("dev_test", () => devTest);
AppRegistry.registerComponent("devlist", () => devlist);
