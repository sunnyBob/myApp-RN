import React, {Component} from 'react';
import { WebView, View, StyleSheet, Dimensions, Text } from 'react-native';
const SCREEN = Dimensions.get('screen');
export default class WebViewTest extends Component {
  static navigationOptions = {
    title: <Text>浏览器测试</Text>,
  }
  render() {
    return (
      <View style={{
        width: SCREEN.width,
        height: SCREEN.height,
      }}>
        <WebView
          style={{
            backgroundColor: 'powderblue',
          }}
          source={{uri: 'https://cn.bing.com/'}}
        />
      </View>
    );    
  }
}
