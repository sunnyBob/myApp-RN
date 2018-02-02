/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ViewPagerAndroid,
  Button,
  WebView,
  Dimensions,
  Alert,
  FlatList,
  Animated,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const SCREEN = Dimensions.get("screen");
const btnColor = ['#EED205', '#72CFD7', '#55A205', '#00CCFF', '#FDD283']

const showData = [{
  key: '警告框',
  onPress: () => {
    Alert.alert(
      'alert test',
      'do you have lanch ?',
      [{
        text: 'ask me later',
        onPress: () => console.log('ask me later'),
      }, {
        text: 'cancel',
        onPress: () => console.log('cancel')
      }, {
        text: 'ok',
        onPress: () => console.log('ok')
      }],
      { cancelable: false }
    )
  },
}, {
  key: '动画',
  onPress: (navigate) => {
    navigate('Animate');
  }
}, {
  key: '图库',
  onPress: (navigate) => {
    navigate('ImagePicker');
  }
}, {
  key: '浏览器',
  onPress: (navigate) => {
    navigate('WebView');
  }
}, {
  key: '电影',
  onPress: (navigate) => {
    navigate('Video');
  }
}];

export default class Home extends Component {
  static navigationOptions = {
    header: <Text>我的主页</Text>,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../../img/4.jpg')} style={styles.container}>
        <View>
          <FlatList
            contentContainerStyle={styles.list}
            data={showData}
            renderItem={({item, index}) => <View style={styles.btn}><Button title={item.key} color={btnColor[index % btnColor.length]} onPress={() => item.onPress(navigate)}/></View>}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  list: {
    height: 400,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    width: SCREEN.width/2,
    height: 50,
  }
});
