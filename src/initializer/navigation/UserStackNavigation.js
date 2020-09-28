import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../module/index';

const Stack = createStackNavigator();
//initialRouteName="HomeScreen"
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon2: {
    color: '#1da1f2',
    fontSize: 35,
    marginTop: 17,
    marginLeft: 28,
  },
  headerStyle: {
    backgroundColor: 'rgba(21,31,40,1)',
    borderBottomWidth: 0,
    shadowColor: 'transparent',
  },
});
