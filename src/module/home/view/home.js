import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import BaseColors from '../../../initializer/helper/BaseColors';
import {
  relativeWidth,
  relativeHeight,
} from '../../../initializer/helper/ViewHelper';
import {UserCard, SearchButton, UserDetailCard} from '../../../component/index';
import _ from 'lodash';
import {Actions} from '../../../initializer/modules/Actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isVisible: false,
      selectedUser: null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.selectedUser.id) {
      return {
        selectedUser: props.selectedUser,
      };
    }

    return {selectedUser: null};
  }

  onModalClose = () => {
    this.setState({selectedUser: null, isVisible: false});
  };

  clickItem = ({item, index}) => {
    const {getSelectedUser} = this.props;
    getSelectedUser(item.id);
    this.setState({isVisible: true});
  };

  onTextChange = (text) => {
    this.setState({text});
  };

  renderItem = ({item, index}) => {
    return (
      <View>
        <UserCard item={item} index={index} onPressItem={this.clickItem} />
      </View>
    );
  };

  renderEmptyList = () => {
    return (
      <View>
        <Text>Users are not available</Text>
      </View>
    );
  };

  searchUser = () => {
    const {text} = this.state;
    const {getSelectedUser} = this.props;

    if (text && text.trim().length > 0) {
      const id = text.trim();
      getSelectedUser(id);
      this.setState({isVisible: true});
    }
  };

  render() {
    const {userList} = this.props;
    const {text, isVisible, selectedUser} = this.state;

    return (
      <View>
        <View style={HomeStyles.containerStyle}>
          <View style={HomeStyles.searchOuterBox}>
            <View style={HomeStyles.searchBox}>
              <TextInput
                onChangeText={this.onTextChange}
                value={text}
                placeholder={'User ID'}
              />
            </View>
            <View style={{flex: 1, paddingHorizontal: relativeWidth(10)}}>
              <SearchButton title="SEARCH" onPressButton={this.searchUser} />
            </View>
          </View>
        </View>
        <View style={HomeStyles.contentBox}>
          <View style={HomeStyles.titleBox}>
            <Text>AVAILABLE USERS</Text>
          </View>
          <View>
            <FlatList
              data={userList}
              renderItem={this.renderItem}
              scrollEnabled={true}
              extraData={this.state}
              ListEmptyComponent={this.renderEmptyList}
              showsVerticalScrollIndicator={false}
              overScrollMode={'auto'}
              contentContainerStyle={{paddingBottom: relativeHeight(500)}}
            />
          </View>
        </View>

        {!_.isEmpty(selectedUser) && (
          <UserDetailCard
            item={selectedUser}
            isVisible={isVisible}
            closeModel={this.onModalClose}
          />
        )}
      </View>
    );
  }
}

export default connect(
  (state) => ({
    userList: state.home.get('userList'),
    selectedUser: state.home.get('selectedUser'),
  }),
  {
    getSelectedUser: Actions.home.getSelectedUser,
  },
)(Home);

const HomeStyles = StyleSheet.create({
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
  },
  contentBox: {
    margin: relativeWidth(20),
  },
  titleBox: {
    marginBottom: relativeHeight(20),
  },
  searchOuterBox: {
    flex: 1,
    flexDirection: 'row',
    margin: relativeWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    flex: 2,
    borderWidth: 1,
    borderColor: BaseColors.darkGray2,
    paddingHorizontal: relativeWidth(2),
    borderStyle: 'solid',
  },
});
