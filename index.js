/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

AppRegistry.registerComponent(appName, () => App);
