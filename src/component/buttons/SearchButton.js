import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import BaseColors from '../../initializer/helper/BaseColors';
import {
  relativeHeight,
  relativeWidth,
} from '../../initializer/helper/ViewHelper';

export default ({title = 'SEARCH', onPressButton = () => {}}) => {
  return (
    <View style={{position: 'relative'}}>
      <TouchableOpacity onPress={onPressButton} style={ButtonStyle.buttonBox}>
        <Text style={ButtonStyle.title}>{title}</Text>
      </TouchableOpacity>
      <View style={[ButtonStyle.triangle]} />
    </View>
  );
};

const ButtonStyle = StyleSheet.create({
  buttonBox: {
    backgroundColor: BaseColors.blueText,
    alignItems: 'center',
    justifyContent: 'center',
    height: relativeHeight(60),
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: BaseColors.white,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 24,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: BaseColors.white,
    position: 'absolute',
    transform: [{rotate: '255deg'}],
    marginTop: relativeHeight(45),
    left: relativeWidth(90),
  },
});
