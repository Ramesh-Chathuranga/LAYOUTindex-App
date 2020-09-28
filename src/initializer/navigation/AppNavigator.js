import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserStackNavigation from './UserStackNavigation';
import BaseColors from '../helper/BaseColors';

import {relativeWidth, relativeHeight} from '../helper/ViewHelper';

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={UserStackNavigation}
            options={{
              title: 'User Information',
              headerStyle: {
                backgroundColor: BaseColors.blueText,
                display: 'none',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
