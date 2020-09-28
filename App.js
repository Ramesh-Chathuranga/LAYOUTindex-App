/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/initializer/navigation/AppNavigator';
import {setTopLevelNavigator} from './src/initializer/repositories/Repository';
import {Provider} from 'react-redux';
import {Actions} from './src/initializer/modules/Actions';
import store from './src/initializer/modules/Store';
import SplashScreen from 'react-native-splash-screen';

export class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  //initialRouteName="Home"
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
store.dispatch(Actions.home.getAllUserList());

export default App;
