import { AppRegistry, YellowBox } from 'react-native';

import './shim';
import App from './app/App';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Module RNRandomBytes',
  'Class RNFaceDetectorModuleMLKit',
]);

AppRegistry.registerComponent('rnWallet', () => App);
// "react-native-root-toast": "^3.2.1",
// "babel-preset-react-native": "^2.1.0",

// "react-navigation": "^2.14.2",
