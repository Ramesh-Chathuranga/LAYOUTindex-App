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

export default ({item, onPressItem = () => {}}, index) => {
  return (
    <TouchableOpacity
      onPress={() => onPressItem({item, index})}
      style={[UserCardStyles.containerStyle]}>
      <View style={UserCardStyles.itemBox}>
        <Text>ID</Text>
        <Text> {`            ${item.id}`}</Text>
      </View>
      <View style={UserCardStyles.itemBox}>
        <Text>NAME</Text>
        <Text> {`    ${item.firstName} ${item.lastName}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const UserCardStyles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    borderRadius: 2,
    borderColor: '#fff',
    shadowColor: BaseColors.GreySubColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 1,
    height: relativeHeight(100),
    backgroundColor: BaseColors.white,
    marginBottom: relativeHeight(20),
    padding: relativeWidth(20),
    borderRadius: 5,
  },

  itemBox: {
    marginBottom: relativeHeight(10),
    flex: 1,
    flexDirection: 'row',
  },
});
