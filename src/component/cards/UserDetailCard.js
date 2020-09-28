import React from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  relativeWidth,
  relativeHeight,
} from '../../initializer/helper/ViewHelper';
import BaseColors from '../../initializer/helper/BaseColors';
import DEFAULT_IMAGE from '../../../assets/plc_girl.jpg';
import {SearchButton} from '../index';

import Modal from 'react-native-modal';

export default ({
  closeModel = () => {},
  isVisible = true,
  item = {firstName: '', lastName: '', picture: '', email: ''},
}) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.7}
      style={{
        flex: 1,
        justifyContent: 'center',
        height: relativeHeight(282),
        width: relativeWidth(345),
      }}>
      <View style={CardStyles.mainView}>
        <View style={CardStyles.textCard}>
          <View
            Style={{
              marginHorizontal: relativeWidth(20),
              marginTop: relativeHeight(40),
              // marginBottom: relativeHeight(40),
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={{
                  width: relativeWidth(100),
                  height: relativeHeight(200),
                }}>
                {item.picture.length > 0 ? (
                  <Image
                    source={{uri: item.picture}}
                    style={CardStyles.image}
                  />
                ) : (
                  <Image source={DEFAULT_IMAGE} style={CardStyles.image} />
                )}
              </View>
              <View
                style={{
                  width: relativeWidth(205),
                  height: relativeHeight(200),
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: relativeWidth(10),
                  }}>
                  <Text style={{fontWeight: 'bold'}}>First Name </Text>
                  <Text>{item.firstName}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: relativeWidth(10),
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Last Name </Text>
                  <Text>{item.lastName}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: relativeWidth(10),
                    paddingRight: relativeWidth(5),
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Email </Text>
                  <Text>{item.email}</Text>
                </View>
                <View
                  style={{
                    width: relativeWidth(120),
                    paddingLeft: relativeWidth(10),
                  }}>
                  <SearchButton
                    title="CLOSE"
                    onPressButton={() => {
                      closeModel();
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const CardStyles = StyleSheet.create({
  grayText: {
    // fontFamily: 'Roboto-Bold',
    fontWeight: 'normal',
    fontSize: 14,
    color: BaseColors.GreySubColor,
  },
  text: {
    // fontFamily: 'Roboto-Bold',
    fontWeight: 'normal',
    fontSize: 14,
    color: BaseColors.defaultText,
  },
  titleText: {
    // fontFamily: 'Roboto-Bold',
    fontSize: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
  },

  textCard: {
    //height: relativeHeight(142),
    marginHorizontal: relativeWidth(20),
    marginTop: relativeHeight(20),
    width: relativeWidth(305),
    marginBottom: relativeHeight(120),
    position: 'relative',
  },

  mainView: {
    backgroundColor: '#fff',
    height: relativeHeight(240),
    width: relativeWidth(345),
    borderRadius: 5,
  },
  image: {
    borderRadius: 90,
    width: 90,
    height: 90,
    // marginHorizontal: relativeWidth(10),
  },
});
